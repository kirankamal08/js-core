//  • Practice: Write a closure that remembers a user’s role and returns different permissions.
function createUserRole(role) {
    return function getPermissions() {
        if (role === 'admin') {
            return 'All permissions granted.';
        } else if (role === 'editor') {
            return 'Edit permissions granted.';
        } else if (role === 'viewer') {
            return 'View permissions granted.';
        } else {
            return 'No permissions granted.';
        }
    }
}
const adminPermissions = createUserRole('admin');
//console.log(adminPermissions()); // 
// Output: All permissions granted

