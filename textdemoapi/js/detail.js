window.onload = async function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("id");
  console.log("params", myParam);
  /* call api load len giao dien */
  try {
    let res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`,
      method: "GET",
      responseType: "json",
    });
    let newArr = [];
    newArr.push(res.data.content);
    console.log(res.data.content);
    renderTable([res.data.content]);
  } catch (err) {
    console.log(err.data.content);
  }
};
// này là lấy ra nguyên cái mảng giày từ 1-19
function renderTable(arr) {
  var htmlString = "";
  for (var index = 0; index < arr.length; index++) {
    var gd = arr[index];
    htmlString += `
     <div class="d-flex justify-content-between avable ${gd.id}">
     <div class="card">
     <div class="img1">
       <img src="${gd.image}" alt="..." />
     </div>
   </div>
     <div class="detail-content">
       <h1 class="title text-white">${gd.name}</h1>
       <p class="text text-white">
       ${gd.description}
       </p>
       <h3 class="text-success fw-semibold">Avalable size</h3>
       <div id="sizes" class="mt-2">
         <button class="btn text-white bg-dark">${gd.size[0]}</button>
         <button class="btn text-white bg-dark">${gd.size[1]}</button>
         <button class="btn text-white bg-dark">${gd.size[2]}</button>
         <button class="btn text-white bg-dark">${gd.size[3]}</button>
         <button class="btn text-white bg-dark">${gd.size[4]}</button>
         <button class="btn text-white bg-dark">${gd.size[5]}</button>
       </div>
       <h6 class="display-6 text-danger">$${gd.price}</h6>
       <div class="buttons_added text-white" style="font-size:20px;"> Số Lượng:${gd.quantity} <br>
         <input
           class="minus is-form"
           id="minus"
           onclick="Minus()"
           type="button"
           value="-"
           style="width: 7%; background-color: cornflowerblue"
         />
         <input
           aria-label="quantity"
           id="number"
           class="input-qty"
           max="Số tối đa"
           min="Số tối thiểu"
           name=""
           type=""
           value="1"
           style="width: 7%"
         />
         <input
           class="plus is-form"
           id="plus"
           type="button"
           value="+"
           style="width: 7%; background-color: cornflowerblue"
         />
       </div>
       <button class="btn-Buy">Add to cart</button>
     </div>
     </div> 
     `;
  }
  document.querySelector("#detail #detail__container").innerHTML = htmlString;
  return htmlString;
}
