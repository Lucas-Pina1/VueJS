import vue from "vue";
export default new vue({
  mehods: {
    alterarIdade(idade) {
      this.$emit("idadeMudou", idade);
    },
    quandoIdadeMudar(callback) {
      this.$on("idadeMudou", callback);
    },
  },
});
