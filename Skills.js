fetch("./Skills.json")
    .then(response => response.json())
    .then(data => {
        console.log("data :", data)

        const container = document.getElementById("card-Tag")

        data.forEach(card => {
            const create = document.createElement("div");
           create.className = "col-6 col-sm-4 col-md-3 col-lg-3 mb-4";

    create.innerHTML = `
        <div class="card shadow-sm h-100">
            <img src="${card.image}" class="card-img-top" alt="">
            <div class="card-body text-center">
                <p class="card-text">${card.para}</p>
            </div>
        </div>
  `
            container.appendChild(create);
        })
    })
    .catch(error => console.error("Error loading Json:", error));


