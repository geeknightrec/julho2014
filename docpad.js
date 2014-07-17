module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Geek Night Recife",
      description: " ",
      date: "23 Julho",
      venue: "ThoughtWorks",
      address: "Av. Governador Agamenon Magalhães, 4779",
      city: "Recife",
      state: "PE"
    },

    // The Call To Action button at the header,
    callToAction: {
        text: "Eu vou!",
        link: "https://docs.google.com/forms/d/1GYmjKGvkMJXpipLNv3XSwJ8u_NwbGkncRXQU-DkbVwo/viewform?usp=send_form"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
    //  'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Agenda",
      partners: "Parceiros",
      //sponsors: "Sponsors",
      //contact: "Contact"
    },

    // The entire schedule
    schedule: [
      {
        name: "Danilo Sato",
        photo: "themes/yellow-swan/img/danilo.jpg",
        bio: "Desenvolvedor de software há mais de 12 anos, trabalha com Métodos Ágeis há dez, e é consultor da ThoughtWorks há seis anos, atuando nos mais diversos papéis: desenvolvedor, agile coach, arquiteto, DevOps, treinador e líder técnico em projetos Ruby e Java no Brasil, EUA e na Inglaterra. É autor do livro ”DevOps na prática: entrega de software confiável e automatizada”.",
        presentation: {
          title: "Padrões de deploy para DevOps e Entrega Contínua",
          description: "Práticas de DevOps e Entrega Contínua ajudam a aumentar a frequência de deploys em empresas, ao mesmo tempo aumentando a estabilidade e robustez dos sistemas em produção. Com o foco em automação, é possível realizar vários deploys por dia, porém é comum encontrar resistência do time de operações quando se tenta colocar isso em prática. Nesta palestra apresentaremos padrões de deploy que irão ajudar a diminuir os riscos ao implantar novas versões de sistemas e aplicativos em produção, e discutir como estreitar a colaboração entre as equipes de desenvolvimento e de operações para implantar DevOps na sua empresa.",
          time: "19h30"
        }
      }   
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "ThoughWorks Recife",
        logo: "themes/yellow-swan/img/tw-logo.png",
        url: "http://www.thoughtworks.com/pt/"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
      return this.site.url;
    }
  }
};
