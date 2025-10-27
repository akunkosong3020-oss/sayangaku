const message = `Hai sayangnya aku Zella Zevira, aku cuma mau bilang aku bener-bener bersyukur punya kamu di hidup aku.\nmungkin aku ga selalu bisa ngungkapin perasaaan ini lewat kata-kata atau tindakan yang sempurna,\n\ntapi aku harap kamu tau betapa berharganya kamu buat aku. kamu bukan cuma seseorang yang spesial\n\nterima kasih karena udah ada disini,udah bersabar sama aku.\n\naku beruntung banget banget bisa ada di samping kamu, semoga kita bisa terus bersama dan melewati apapun yang ada di depan. -Afzal`;

function showLetter() {
  // Play the background music when the button is clicked
  const audio = document.getElementById("backgroundMusic");
  audio.play().catch(error => {
    console.log("Autoplay blocked, music will play on user interaction:", error);
  });

  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
