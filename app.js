const formEl = document.querySelector("form");
const cards = document.querySelector(".cards");



function add(){
  const allCars = JSON.parse(localStorage.getItem("carss"))
    ? JSON.parse(localStorage.getItem("carss"))
    : [];

  console.log(allCars);

  if (allCars.length) {
    createCar(allCars);
  }else{
    cards.innerHTML = `<div class="text-center w-100" style="font-size: 30px; font-weight: bold; margin-top: 200px" >Hozircha Avtomobil yo'q</div>`;
  }

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = formEl.name.value;
    const speed = formEl.speed.value;
    const price = formEl.price.value;
    const url = formEl.url.value;
    const color = formEl.color.value;
    const id = Math.random();

    const newCar = {
      name,
      speed,
      price,
      url,
      color,
      id,
    };

    allCars.push(newCar);
    localStorage.setItem("carss", JSON.stringify(allCars));

    //
    formEl.reset();
    createCar(allCars);
    location.reload();
  });

  function createCar() {
    cards.innerHTML = "";
    allCars.map((item) => {
      cards.innerHTML += `
      <div class="cards">
                    <div class="card" style="width: 18rem;">
                        <img  src=${item.url} class="card-img-top object-fit-cover" style="width: 100%; height: 200px;" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${item.name} <span id=${item.id} class="trash" style="float: right; cursor: pointer; color: blue"><i class="fa-solid fa-trash"></i></span></h5>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">Speed: ${item.speed} km/s</li>
                          <li class="list-group-item">Price: ${item.price}$</li>
                          <li class="list-group-item">Color: ${item.color} <span style="height: 20px; width: 20px; background-color: ${item.color}; display: inline-block;"></span></li>
                        </ul>
                        <div class="card-body">
                          <a href=${item.url} class="card-link">more imgs</a>
                          <a href="#" class="card-link">Another link</a>
                        </div>
                      </div>
    `;
    });
  }

   const trash = document.querySelectorAll(".trash");
 

    trash.forEach(async (item) => {
      item.addEventListener("click", () => {
        const id = item.getAttribute("id");

        const filteredItems = allCars.filter((car) => {
          return car.id != id;
        });
        localStorage.setItem("carss", JSON.stringify(filteredItems));
        add();
      });
    });
}

add();
  

window.addEventListener('contextmenu', event => event.preventDefault());

window.document.onkeydown = function (e) {
    if (e.ctrlKey &&
        (e.keyCode === 67 ,
            e.keyCode === 86 ,
            e.keyCode === 85 ||
            e.keyCode === 117) || e.keyCode == 123) {
        return false;
    } else {
        return true;
    }
};


