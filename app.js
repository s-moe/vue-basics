const app = Vue.createApp({
  data() {
    return {
      courseGoal: "finish the course",
      vueLink: "https://vuejs.org/",
    };
  },
});

app.mount("#user-goal");
