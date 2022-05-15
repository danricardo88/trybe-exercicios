let statusDoaluno = 'lista'

switch(statusDoaluno) {
  
  case 'aprovado':
    console.log('Parabéns, você foi aprovado');
    break;

  case 'lista':
    console.log("Você está na nossa lista de espera");

    break; 

  case 'reprovado':
    console.log("Não tem chororô, no teste vc reprovo!");
    break;

  default:
    console.log('Não se aplica')
    

}