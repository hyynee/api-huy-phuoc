function renderTable(arr) {
  var htmlString = "";
  for (var index = 0; index < arr.length; index++) {
    var dg = arr[index];
    htmlString += `
      <div class="col  col-sm-6 col-lg-4 col-12" style="padding-bottom:100px">
      <div class="card mx-auto">
      <div class="card__heart">
          <i class="fa fa-heart"></i>
      </div>
      <div class="card_cart">
          <i class="fa fa-shopping-cart"></i>
      </div>
      <div class="card_img">
          <img src="${dg.image}" alt="">
      </div>
      <div class="card-body">
      <div class="card__title">
      <h4 class="fw-semibold">${dg.name}</h4> <br/>
      <i style="font-size:12px">The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.</i>
      </div>
      <div  class="d-flex start-item justify-content-center align-items-center"
      style="color: #f9d412">
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      </div>
      </div>
      <div class="card-bottom">
      <div class="rating-button">
      <div class="card_action">
      <a class="btn-Buy" href="../views/detail.html?id=${dg.id}"> Buy Now </a>
         <button class="price">$${dg.price}</button>
      </div>
      </div>
      </div>
  </div>
    </div>
      `;
  }
  document.querySelector("#tbody .row").innerHTML = htmlString;
  return htmlString;
}

function layDanhSach() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    responseType: "json",
  });
  promise.then(function (res) {
    console.log(res.data.content);
    renderTable(res.data.content);
  });
  // promise.catch(function (err) {
  //   console.log(err);
  // });
}
layDanhSach();
