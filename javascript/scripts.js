(() => {

    //Pegar os elementos pelo ID
    let text = document.getElementById('text');
    let bird1 = document.getElementById('bird1');
    let bird2 = document.getElementById('bird2');
    let btn = document.getElementById('btn');
    let rocks = document.getElementById('rocks');
    let forest = document.getElementById('forest');
    let water = document.getElementById('water');
    let header = document.getElementById('header');
    let submarine = document.getElementById('submarine');
    let homem = document.getElementById('homem');
    let balaoFala = document.getElementById('balaoFala');
    let bolhas = document.getElementById('bolhas');
    let bolhas2 = document.getElementById('bolhas2');
    let balaoAbout = document.getElementById('balaoAbout');
    let balaoObjectives = document.getElementById('balaoObjectives');
    let balaoEscolaridade = document.getElementById('balaoEscolaridade');
    let balaoSkills = document.getElementById('balaoSkills');
    let balaoCertificados = document.getElementById('balaoCertificados');
    let balaoContact = document.getElementById('balaoContact');
    let balaoFinal = document.getElementById('balaoFinal');
    
    
    let footer = document.getElementById('rodape');
    anoAtual = new Date().getFullYear();
    footer.innerHTML = `Copyright © ${anoAtual} - Bernardo Magueta Kowalsky`;

    //Animar os elementos quando detectar o Scroll
    window.addEventListener('scroll', function() {
        let value = window.scrollY;

        text.style.top = 50 + value * -0.5 + '%';
        bird1.style.top = value * -1.5 + 'px';
        bird1.style.left = value * 2 + 'px';
        bird2.style.top = value * -1.5 + 'px';
        bird2.style.left = value * -5 + 'px';
        btn.style.marginTop = value * 1.5 + 'px';
        rocks.style.top = value * -0.12 + 'px';
        forest.style.top = value * 0.25 + 'px';
        header.style.top = value * 0.5 + 'px';
        submarine.style.marginTop = value * 0.97 + 'px';
        header.style.top = value * 0 + 'px';
        bolhas.style.top = value * -0.3 + 'px';
        bolhas2.style.top = value * -0.3 + 'px';
        balaoAbout.style.marginTop = value * 0.97 + 'px';
        balaoObjectives.style.marginTop = value * 0.97 + 'px';
        balaoEscolaridade.style.marginTop = value * 0.97 + 'px';
        balaoSkills.style.marginTop = value * 0.97 + 'px';
        balaoCertificados.style.marginTop = value * 0.97 + 'px';
        balaoContact.style.marginTop = value * 0.97 + 'px';
        balaoFinal.style.marginTop = value * 0.97 + 'px';
        })

    //Aparecer e desaparecer balões de diálogo seguindo o scroll e o homem.
    window.addEventListener("scroll", function () {
      var scroll = this.scrollY;

      //balaoAbout sumir e aparecer
      if(scroll < 600) {
        balaoAbout.classList.add('escondeBalao');
      } else if (scroll > 1190) {
        balaoAbout.classList.add('escondeBalao');
      } else {
        balaoAbout.classList.remove('escondeBalao');
        balaoAbout.classList.remove('balaoInicio');
      }

      //balaoObjectives sumir e aparecer
      if(scroll < 1790) {
        balaoObjectives.classList.add('escondeBalao');
      } else if (scroll > 2350) {
        balaoObjectives.classList.add('escondeBalao');
      } else {
        balaoObjectives.classList.remove('escondeBalao');
        balaoObjectives.classList.remove('balaoInicio');
      }

      //balaoEscolaridade sumir e aparecer
      if(scroll < 2925) {
        balaoEscolaridade.classList.add('escondeBalao');
      } else if (scroll > 3950) {
        balaoEscolaridade.classList.add('escondeBalao');
      } else {
        balaoEscolaridade.classList.remove('escondeBalao');
        balaoEscolaridade.classList.remove('balaoInicio');
      }

      //balaoSkills sumir e aparecer
      if(scroll < 4540) {
        balaoSkills.classList.add('escondeBalao');
      } else if (scroll > 5600) {
        balaoSkills.classList.add('escondeBalao');
      } else {
        balaoSkills.classList.remove('escondeBalao');
        balaoSkills.classList.remove('balaoInicio');
      }

      //balaoCertificados sumir e aparecer
      if(scroll < 6155) {
        balaoCertificados.classList.add('escondeBalao');
      } else if (scroll > 6640) {
        balaoCertificados.classList.add('escondeBalao');
      } else {
        balaoCertificados.classList.remove('escondeBalao');
        balaoCertificados.classList.remove('balaoInicio');
      }

      //balaoContact sumir e aparecer
      if(scroll < 7230) {
        balaoContact.classList.add('escondeBalao');
      } else if (scroll > 7630) {
        balaoContact.classList.add('escondeBalao');
      } else {
        balaoContact.classList.remove('escondeBalao');
        balaoContact.classList.remove('balaoInicio');
      }

      //balaoFinal sumir e aparecer
      if(scroll < 8000) {
        balaoFinal.classList.add('escondeBalao');
      } else if (scroll > 9000){
        balaoFinal.classList.add('escondeBalao');
      } else {
        balaoFinal.classList.remove('escondeBalao');
        balaoFinal.classList.remove('balaoInicio');
      }

      //Homem sumir e aparecer
      if(scroll > 0) {
        homem.classList.add('escondeHomem');
        balaoFala.classList.add('escondeBalao');
      } else if (scroll == 0){
        homem.classList.remove('escondeHomem');
        balaoFala.classList.remove('escondeBalao');
      }
    });

})()
