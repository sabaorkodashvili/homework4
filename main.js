const sitcoms = [
  {
    name: "Friends",
    releaseYear: 1994,
    rating: 8.5,
    url: "https://netflix.com/sitcom",
  },
  {
    name: "The Office",
    releaseYear: 2005,
    rating: 8.9,
    url: "https://netflix.com/sitcom",
  },
  {
    name: "Parks and Recreation",
    releaseYear: 2009,
    rating: 8.6,
    url: "https://netflix.com/sitcom",
  },
  {
    name: "Brooklyn Nine-Nine",
    releaseYear: 2013,
    rating: 8.4,
    url: "https://netflix.com/sitcom",
  },
  {
    name: "How I Met Your Mother",
    releaseYear: 2005,
    rating: 8.3,
    url: "https://netflix.com/sitcom",
  },
  {
    name: "The Big Bang Theory",
    releaseYear: 2007,
    rating: 8.1,
    url: "https://netflix.com/sitcom",
  },
  {
    name: "Modern Family",
    releaseYear: 2009,
    rating: 8.4,
    url: "https://netflix.com/sitcom",
  },
  {
    name: "The Simpsons",
    releaseYear: 1989,
    rating: 8.6,
    url: "https://netflix.com/sitcom",
  },
  {
    name: "Seinfeld",
    releaseYear: 1989,
    rating: 8.8,
    url: "https://netflix.com/sitcom",
  },
  {
    name: "The IT Crowd",
    releaseYear: 2006,
    rating: 8.5,
    url: "https://netflix.com/sitcom",
  },
];
const table = document.getElementById("table");
table.style.display = "flex";
table.style.flexWrap = "wrap";
table.style.gap = "30px";
const sort = document.getElementById("sort");
sort.style.margin = "30px auto";

function getFilms(arr) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    const box = document.createElement("tr");
    box.style.border = "1px solid black";
    box.style.width = "200px";
    box.style.gap = "17px";
    box.style.display = "flex";
    box.style.flexDirection = "column";
    box.style.alignItems = "center";
    box.style.padding = "10px";

    const name = document.createElement("th");
    name.textContent = element.name;
    const year = document.createElement("th");
    year.textContent = element.releaseYear;
    const rating = document.createElement("th");
    rating.textContent = element.rating;

    const url = document.createElement("a");
    url.href = element.url;
    url.textContent = element.url;
    url.target = "_blank";
    url.style.margin = "10px";
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.onclick = () => {
      box.remove();
    };
    box.appendChild(name);
    box.appendChild(year);
    box.appendChild(rating);
    box.appendChild(url);
    box.appendChild(deleteBtn);
    table.appendChild(box);
  }
}
getFilms(sitcoms);
sort.onclick = () => {
  table.innerHTML = "";
  getFilms(sitcoms);
  sortByRating(sitcoms);
};

function sortByRating(array) {
  array.sort(function (a, b) {
    return b.rating - a.rating;
  });
}
