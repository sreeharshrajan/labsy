-- Create restrictive RLS policies that work properly
-- Restrictive policies are combined with AND, making them more secure

-- First, let's see what the current situation is
SELECT 
    current_user as current_user,
    session_user as session_user;

-- Drop existing permissive policies and create restrictive ones
DROP POLICY IF EXISTS "tenant_access_policy" ON "Tenant";

-- Create a restrictive policy that denies access by default
CREATE POLICY "tenant_restrictive_access" ON "Tenant"
    AS RESTRICTIVE
    FOR ALL
    USING (
        -- Allow super admin access
        (
            current_setting('app.is_super_admin', true) IS NOT NULL 
            AND current_setting('app.is_super_admin', true) != ''
            AND current_setting('app.is_super_admin', true) = 'true'
        )
        OR 
        -- Allow tenant-specific access
        (
            current_setting('app.current_tenant_id', true) IS NOT NULL 
            AND current_setting('app.current_tenant_id', true) != ''
            AND id = current_setting('app.current_tenant_id', true)
        )
    );

-- Also create a permissive policy (both will be evaluated)
CREATE POLICY "tenant_permissive_base" ON "Tenant"
    AS PERMISSIVE
    FOR ALL
    USING (true);  -- This allows everything, but restrictive policy will limit it

-- Test the policy immediately
SELECT 
    'Testing policy with no context' as test_name,
    (
        (
            current_setting('app.is_super_admin', true) IS NOT NULL 
            AND current_setting('app.is_super_admin', true) != ''
            AND current_setting('app.is_super_admin', true) = 'true'
        )
        OR 
        (
            current_setting('app.current_tenant_id', true) IS NOT NULL 
            AND current_setting('app.current_tenant_id', true) != ''
            AND 'test-id' = current_setting('app.current_tenant_id', true)
        )
    ) as policy_result;

-- Set test context and test again
SELECT set_config('app.is_super_admin', 'false', true);
SELECT set_config('app.current_tenant_id', '', true);

SELECT 
    'Testing policy with false context' as test_name,
    current_setting('app.is_super_admin', true) as super_admin_setting,
    current_setting('app.current_tenant_id', true) as tenant_id_setting,
    (
        (
            current_setting('app.is_super_admin', true) IS NOT NULL 
            AND current_setting('app.is_super_admin', true) != ''
            AND current_setting('app.is_super_admin', true) = 'true'
        )
        OR 
        (
            current_setting('app.current_tenant_id', true) IS NOT NULL 
            AND current_setting('app.current_tenant_id', true) != ''
            AND 'test-id' = current_setting('app.current_tenant_id', true)
        )
    ) as policy_result;

COMMENT ON POLICY "tenant_restrictive_access" ON "Tenant" IS 'Restrictive RLS policy - denies access unless conditions are met';
