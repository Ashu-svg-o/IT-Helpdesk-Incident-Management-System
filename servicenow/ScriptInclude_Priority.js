// Example Script Include logic (portfolio reference)
// Demonstrates reusable priority calculation.

var HelpdeskPriority = Class.create();
HelpdeskPriority.prototype = {
    initialize: function() {},

    calculate: function(impact, urgency) {
        if (impact == 1 && urgency == 1) return 1;
        if (impact <= 2 && urgency <= 2) return 2;
        if (impact <= 2 || urgency <= 2) return 3;
        return 4;
    },

    type: 'HelpdeskPriority'
};
