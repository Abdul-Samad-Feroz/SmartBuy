  window.addEventListener("load", function () {
    const loaderWrapper = document.getElementById("loader-wrapper");
    loaderWrapper.style.opacity = "0";
    loaderWrapper.style.visibility = "hidden";
    loaderWrapper.style.transition = "all 0.5s ease";
  });

var apidata = [];
var container = document.getElementById("apii");

fetch("https://fakestoreapi.com/products")
  .then((Response) => Response.json())
  .then((data) => {
    apidata = data;
    console.log(apidata);
    for (var i = 0; i < apidata.length; i++) {
      var post = apidata[i];
      var postElement = document.createElement("div");
      postElement.className =
        "bg-white rounded-lg hover:shadow-2xl hover:cursor-pointer hover:transition-shadow hover:duration-500 px-6 py-2 max-w-[400px] min-h-[400px] flex flex-col items-start";
      postElement.innerHTML = `
        <div class="m-auto">
            <img src="${post.image}" class="w-48 h-48 " /> 
        </div>
        
        <div class="">
            <h2 class="text-lg font-semibold text-orange-500 mb-2">${post.title}</h2>
        </div>
        
        <div class="">
            <p class="text-gray-500 ">${post.description}</p>
        </div>

        <div class="mt-4 w-[100%] flex flex-row justify-between">
            <div>
                <p class="text-md font-bold hover:text-black hover:font-semibold hover:cursor-pointer mb-2"><i class="fa-duotone fa-solid fa-sack-dollar"></i> : ${post.price}$</p>
            </div>
            <div class="flex">
                <p class="text-md font-bold  hover:text-black hover:font-semibold hover:cursor-pointer mb-2"><i class="fa-solid fa-star"></i> : ${post.rating.rate}</p>
                <p class="text-md font-bold  hover:text-black hover:font-semibold hover:cursor-pointer mb-2">(${post.rating.count})</p>

            </div>
        </div>
`;
      container.appendChild(postElement);
    }
  })
  .catch((error) => {
    console.error(error);
  });
