const hotelsElm = document.querySelector(".hotels");
const filtersElm = [...document.querySelectorAll(".filters li input")];

render_hotels(hotels);

filtersElm.forEach((item) => {
    item.addEventListener("change", () => {
        const checked = filtersElm
            .filter((i) => i.checked)
            .map((i) => parseInt(i.getAttribute("data-id")));
        filter_hotels(checked);
    });
});

function render_hotels(list) {
    let li = "";
    list.forEach((hotel) => {
        li += `
        <li class="hotel">
            <div class="image" style="background-color:${hotel.color};"></div>
            <div class="info">
                <h4>${hotel.name}</h4>
                <ul>
                    ${hotel.perks
                        .map(
                            (perkId) =>
                                `<li>${perks.find((perk) => perk.id === perkId).description}</li>`
                        )
                        .join("")}
                </ul>
            </div>
            ${hotel.perks.includes(2) ? '<span class="best">Bestseller</span>' : ""}   
        </li>`;
    });

    hotelsElm.innerHTML = li;
}

function filter_hotels(filter) {
    const filtered = hotels.filter((hotel) => {
        return filter.every((i) => hotel.perks.includes(i));
    });

    render_hotels(filtered);
}
