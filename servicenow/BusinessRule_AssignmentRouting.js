// Example ServiceNow Business Rule logic (portfolio reference)
// Use as a starting point in a ServiceNow PDI.
// Table: incident
// When: before insert/update

(function executeRule(current, previous) {
    if (current.category == 'network') {
        current.assignment_group = 'Network Support';
    } else if (current.category == 'software') {
        current.assignment_group = 'Application Support';
    } else if (current.category == 'printer' || current.category == 'hardware') {
        current.assignment_group = 'Desktop Support';
    }
})(current, previous);
