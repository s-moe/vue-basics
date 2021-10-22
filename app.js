const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "finish the course",
      courseGoalB: "<h2>Master Vue and build an amazing application</h2>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
