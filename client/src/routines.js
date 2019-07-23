const routines = {
  once: {
    name: "One and Done Routine",
    totalTime: null,
    tasks: [
      {
        name: "Put books on bookshelf from office desk",
        time: 1
      },
      {
        name: "Take label paper back down to basement plastic file cabinet",
        time: 2
      },
      {
        name: "Take boxes out of office closet, and make a thrift store trash bag",
        time: 3
      },
      {
        name: "put towel on floor of office in the closet with other towels",
        time: 1
      },
      {
        name: "sweep garage",
        time: 5
      },
      {
        name: "sweep basement",
        time: 5
      },
      {
        name: "find a place to dispose battery in the garage (wal-mart)",
        time: 5
      },
      {
        name: "Make a home for waffle and pancake mix on kitchen counter",
        time: 2
      },
    ],
  },
  night: {
    name: "Night Routine",
      totalTime: null,
      tasks: [
        {
          name: "Brush Teeth",
          time: 1
        },
        {
          name: "Chammomile Tea",
          time: 5
        },
      ],
    },
    office: {
      name: "Office Routine",
      totalTime: null,
      tasks: [
        {
          name: "Sort the sort pile",
          time: 5
        },
        {
          name: "Run Errands",
          time: 5
        },
        {
          name: "Add Action Items Pile to Tasks",
          time: 5
        },
  
      ],
    },
    basement: {
      name: "Basement Routine",
      totalTime: null,
      tasks: [
        {
          name: "Water Plants",
          time: 1
        },
        {
          name: "Break Down Boxes",
          time: 5
        },
        {
          name: "Sweep",
          time: 5
        },
        {
          name: "Empty and start Roomba",
          time: 5
        },
        {
          name: "Empty the'Upstairs to Basement' transfer box",
          time: 5
        },
  
      ],
    },
    morning: {
      name: "Morning Routine",
      totalTime: null,
      tasks: [
        {
          name: "Make Bed",
          time: 1
        },
        {
          name: "Coffee",
          time: 5
        },
        {
          name: "Laundry",
          time: 10
        },
        {
          name: "Take out Trash",
          time: 3
        },
        {
          name: "Dishes",
          time: 5
        },
        {
          name: "Brush Teeth",
          time: 2
        },
        {
          name: "Feed and Water Dog",
          time: 2
        },
  
        {
          name: "Give Izaak Medicine/Nails/Hair/Bath",
          time: 3
        },
        {
          name: "Wipe Kitchen Counters",
          time: 5
        },
        {
          name: "Breakfast - check weekly meal plan",
          time: 5
        },
        {
          name: "Take Medicine",
          time: 1
        },
        {
          name: "Lotion",
          time: 2
        },
        {
          name: "Shave",
          time: 5
        },
        {
          name: "Shower",
          time: 5
        },
        // {
        //   name: "Study",
        //   time: 5
        // },
        {
          name: "Groom Izaak",
          time: 5
        },
        {
          name: "Vaccuum",
          time: 5
        },
        {
          name: "Clean Kitchen Table",
          time: 5
        },
        // {
          //   name: "Review Notes from Phone",
        //   time: 5
        // },
        // {
        //   name: "Yardwork", 
        //   time: 5
        // },
        // {
          //   name: "Scoop Izaaks Poop	",
        //   time: 5
        // },
        // {
        //   name: "Walk Izaak",
        //   time: 15
        // },
        // {
        //   name: "Yoga",
        //   time: 5
        // },
        // {
        //   name: "Meditate",
        //   time: 15
        // },
        // {
        //   name: "Motivational video",
        //   time: 5
        // },
        // {
        //   name: "Cardio",
        //   time: 5
        // },
      ],
    },
  
  }
  
        module.exports = routines