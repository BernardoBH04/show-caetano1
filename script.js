function comprar() {
    const qtd = document.getElementById('qtd').value;
    const tipo = document.getElementById('tipo').value;
    const brinde = document.getElementById('brinde').value;
    const msg = document.getElementById('msg');

    let texto = `🎉 Compra SIMULADA: ${qtd} ingresso(s) do tipo "${tipo}" com o brinde "${brinde}"!`;
    if(tipo.includes("VIP")) {
        texto += " 🌟 Experiência VIP ativa! Acesso exclusivo aos bastidores!";
    } else if(tipo.includes("Meia-entrada")) {
        texto += " 💳 Benefício de meia-entrada aplicado!";
    }
    msg.innerText = texto;
}
