new Vue({
  el: '#desafio',
  data: {
    nome: 'Lucas',
    idade: '26',
    imagem:'img src="https://www.cupcom.com.br/wp-content/uploads/2020/10/IMAGENS-SITEuv-vuejs.jpg"',
    inputInicial: 'input value="{{ nome }}"'
  },
  methods: {
    idadeTriplicada()  {
      return this.idade * 3
    },

    numeroAleatorio() {
      return Math.random()
    },
  }
})