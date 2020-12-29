export default {
  asyncChangeName(context) {
    setTimeout(() => {
        context.commit('asyncChangeName','五五');
    }, 1000);
  }
}
