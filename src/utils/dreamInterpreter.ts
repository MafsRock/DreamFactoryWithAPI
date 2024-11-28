const interpretations = [
  "Os astros indicam que seu subconsciente está tentando lhe dizer algo profundo: talvez seja hora de parar de comer chocolate antes de dormir. A energia cósmica é clara sobre isso. 🌟",
  
  "Segundo antigas tradições místicas, sonhar com isso significa que você está prestes a receber uma visita inesperada do universo. Ou talvez seja apenas o carteiro. Os símbolos são misteriosos. 🌙",
  
  "A sabedoria ancestral sugere que este sonho está conectado com suas vidas passadas. Aparentemente, você já foi um gato egípcio em uma delas. A energia felina é forte em você. ✨",
  
  "As cartas do tarô revelam que seu caminho está alinhado com forças poderosas do cosmos. Também sugerem que você deveria organizar melhor seu guarda-roupa. Os astros são muito específicos sobre isso. 🔮",
  
  "A interpretação esotérica mostra que você está em um momento de grande transformação espiritual. O universo sugere que comece essa transformação arrumando sua cama todas as manhãs. 🌠",
  
  "Os oráculos antigos dizem que seu sonho é um presságio de grandes mudanças. Eles também mencionam que você deveria beber mais água. A hidratação é fundamental para o alinhamento cósmico. 🌌",
  
  "A análise astrológica sugere que Mercúrio retrógrado está influenciando seus sonhos. Isso explica por que você sonhou que estava dançando tango com um pinguim. Totalmente normal nessa configuração planetária. 🎭",
  
  "Os símbolos oníricos presentes em seu sonho revelam uma conexão profunda com o cosmos. Também revelam que você assiste séries demais antes de dormir. O equilíbrio é importante. 🌗",
  
  "A sabedoria milenar interpreta este sonho como um sinal de que você está no caminho certo. Embora esse caminho pareça estranhamente similar ao caminho para sua geladeira às 3 da manhã. 🌙",
  
  "As energias místicas sugerem que você está prestes a fazer uma descoberta importante sobre si mesmo. Provavelmente relacionada ao seu gosto peculiar por meias diferentes. O universo aprecia sua originalidade. ⭐"
];

export function interpretDream(dream: string): string {
  const randomIndex = Math.floor(Math.random() * interpretations.length);
  return interpretations[randomIndex];
}