fetch('https://api.bluelytics.com.ar/v2/latest')
.then(res => res.json())
.then(res => {
    const dolar = document.getElementById("dolar")
    console.log(res)
    
    const textoAImprimir = `
    <h2>Promedio: </h2>
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Dolar Blue</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Promedio : ${res.blue.value_avg} </h6>
    <h6 class="card-subtitle mb-2 text-body-secondary">Venta : ${res.blue.value_sell} </h6>
    <h6 class="card-subtitle mb-2 text-body-secondary>Compra : ${res.blue.value_buy} </h6>
    <a href="#" class="btn btn-dark">Card link</a>
  </div>
</div>
    
    
    `

    dolar.innerHTML = textoAImprimir
} )
