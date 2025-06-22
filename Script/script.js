document.addEventListener("DOMContentLoaded", () => {
    const create_tittle = document.getElementById("create_tittle");
    const create_add_member_btn = document.getElementById("create_add_member_btn");
    const create_delete_member_btn = document.getElementById("create_delete_member_btn");
    const create_member_conatiner = document.getElementById("create_member_conatiner");
    const create_add_place_btn = document.getElementById("create_add_place_btn");
    const create_delete_place_btn = document.getElementById("create_delete_place_btn");
    const create_places_conatiner = document.getElementById("create_places_conatiner");
    const create_plan_details = document.getElementById("create_plan_details");
    const create_btn = document.getElementById("create_btn");

    const input = document.getElementById("imageUpload");
    const preview = document.getElementById("preview");

    let create_plan = { Tittle: "", Members: [], Places: [], Detail: "", src: "" };
    let create_plans = JSON.parse(localStorage.getItem("plan")) || [];
    let test_plan = {
        Tittle: "Uk ",
        Members: [
            { id: "member_ 1", Name: "Ram", Age: "22" },
            { id: "member_ 2", Name: "Sham", Age: "40" },

            { id: "member_ 3", Name: "Dham", Age: "10" },
        ],
        Places: [
            { id: "place_ 1", Place: " Tower of London", Date: "14/03/2025" },

            { id: "place_ 2", Place: "Camden Market", Date: "09/04/2025" },
            { id: "place_ 3", Place: "British Museum", Date: "27/04/2025" },
            { id: "place_ 4", Place: "Sky Garden", Date: "02/05/2025" },
            { id: "place_ 5", Place: "Notting Hill", Date: "21/06/2025" },
            { id: "place_ 6", Place: "Natural History ", Date: "30/01/2026" },
        ],
        Detail: `London Travel Plan: Exploring History, Culture, and Views (6-Day Itinerary)

This six-day trip to London is thoughtfully planned to capture the essence of the city—its rich history, vibrant culture, and iconic sights. Each day is dedicated to exploring one special location, giving me time to fully absorb the experience without rushing.

I’ll begin on 30/01/2025 with the Natural History Museum, where I’ll spend the day admiring fascinating exhibits, from dinosaur skeletons to the life-size blue whale in Hintze Hall. It’s the perfect introduction to London’s depth of knowledge and wonder.

The next stop is 27/02/2025 at the British Museum, where ancient artifacts from Egypt, Greece, and Asia await. This will be a day of reflection and curiosity, as I explore treasures like the Rosetta Stone and Parthenon sculptures.

On 14/03/2025, I’ll head to the Tower of London, where the medieval walls tell stories of prisoners, executions, and crown jewels. A guided tour with the Yeoman Warders will offer deep historical insight.

Then, on 09/04/2025, I’ll enjoy the creative energy of Camden Market—a hub of street food, alternative fashion, and live music. It’s a contrast to the museums, highlighting London’s modern and youthful vibe.

02/05/2025 brings a more relaxed mood at the Sky Garden, offering stunning panoramic views of London’s skyline from a peaceful indoor garden space, perfect for photography and unwinding.

Finally, on 21/06/2025, I’ll stroll through the charming neighborhood of Notting Hill, visiting the famous bookshop and vibrant pastel houses, ending the journey on a light, colorful note.

Each location reflects a unique part of London’s character, and spreading the visits over time allows for meaningful, immersive experiences rather than hurried sightseeing.`,
        src: "../Taj_mahal_photo.avif",
    };

    input.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                preview.src = e.target.result;
                create_plan.src = e.target.result;
                preview.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });

    create_tittle.addEventListener("change", () => {
        create_plan.Tittle = create_tittle.value;
        console.log(create_plan.Tittle);
    });

    create_add_member_btn.addEventListener("click", () => {
        create_plan.Members.push({ id: `member_ ${create_plan.Members.length + 1}`, Name: "", Age: null });
        console.log(create_plan.Members);
        const li = document.createElement("li");
        li.id = `member_ ${create_plan.Members.length}`;
        li.innerHTML = `<div class="bg-gray-800 p-2 flex justify-between">
                                            <span>Member ${create_plan.Members.length} </span>
                                            
                                        </div>
                                        <div class="px-2">
                                            <span ">Name : </span>

                                            <input
                                                type="text"
                                                placeholder="Enter the member name"
                                                class="border-b-[1px] p-2 rounded-sm text-sm w-[80%]"
                                                id="member_name_${create_plan.Members.length}"
                                                 />
                                        </div>
                                        <div class="px-2 mt-2">
                                            <span>Age :</span>
                                            <input
                                                type="number"
                                                name=""
                                                id="member_age_${create_plan.Members.length}"
                                                placeholder="0"
                                                class="border-b-[1px] p-2 rounded-sm text-sm w-[50px]" />
                                        </div>`;
        li.classList.add("text-sm", "pb-2", "my-2", "bg-gray-950", "rounded-2xl", "overflow-hidden");

        create_member_conatiner.appendChild(li);
        document.getElementById(`member_age_${create_plan.Members.length}`).addEventListener("change", function () {
            const number = parseInt(this.id.split("_").pop());

            create_plan.Members.forEach((mem) => {
                let num = mem.id.split("_").pop();
                if (num == number) {
                    mem.Age = this.value;
                }
            });
            console.log("After", create_plan.Members);
        });
        document.getElementById(`member_name_${create_plan.Members.length}`).addEventListener("change", function () {
            const number = parseInt(this.id.split("_").pop());
            create_plan.Members.forEach((mem) => {
                let num = mem.id.split("_").pop();
                if (num == number) {
                    mem.Name = this.value;
                }
            });
            console.log(create_plan.Members);
        });
    });

    create_delete_member_btn.addEventListener("click", () => {
        if (create_plan.Members.length == 0) {
            return;
        }
        let id = create_plan.Members.pop().id;
        document.getElementById(id).remove();
    });

    create_add_place_btn.addEventListener("click", () => {
        create_plan.Places.push({ id: `place_ ${create_plan.Places.length + 1}`, Place: "", Date: null });
        console.log(create_plan.Places);
        const li = document.createElement("li");
        li.id = `place_ ${create_plan.Places.length}`;
        li.innerHTML = `<div class="bg-gray-800 p-2">Place ${create_plan.Places.length}</div>
                                        <div class="px-2">
                                            <span>Place Name : </span>

                                            <input
                                                type="text"
                                                id="place_name_${create_plan.Places.length}"
                                                placeholder="Enter the place name"
                                                class="border-b-[1px] p-2 rounded-sm text-sm w-[80%]" />
                                        </div>
                                        <div class="px-2 mt-2">
                                            <span>Date :</span>
                                            <input
                                                type="date"
                                                name=""
                                                id="place_date_${create_plan.Places.length}"
                                                placeholder="DD/MM/YYYY"
                                                class="border-b-[1px] p-2 rounded-sm text-sm w-[150px]" />
                                        </div>`;
        li.classList.add("text-sm", "pb-2", "my-2", "bg-gray-950", "rounded-2xl", "overflow-hidden");

        create_places_conatiner.appendChild(li);
        document.getElementById(`place_name_${create_plan.Places.length}`).addEventListener("change", function () {
            const number = parseInt(this.id.split("_").pop());

            create_plan.Places.forEach((mem) => {
                let num = mem.id.split("_").pop();
                if (num == number) {
                    mem.Place = this.value;
                }
            });
            console.log(create_plan.Places);
        });
        document.getElementById(`place_date_${create_plan.Places.length}`).addEventListener("change", function () {
            const number = parseInt(this.id.split("_").pop());
            create_plan.Places.forEach((mem) => {
                let num = mem.id.split("_").pop();
                if (num == number) {
                    const [year, month, day] = this.value.split("-");
                    const formatted = `${day}/${month}/${year}`;
                    mem.Date = formatted;
                }
            });
            console.log(create_plan.Places);
        });
    });

    create_delete_place_btn.addEventListener("click", () => {
        if (create_plan.Places.length == 0) {
            return;
        }
        let id = create_plan.Places.pop().id;
        console.log(id);
        document.getElementById(id).remove();
    });

    create_plan_details.addEventListener("change", () => {
        create_plan.Detail = create_plan_details.value;
        console.log(create_plan);
    });

    create_btn.addEventListener("click", () => {
        if (create_plan.src === "" || create_plan.Tittle == "") {
            // create_plans.push(test_plan);
            // localStorage.setItem("plan", JSON.stringify(create_plans));
            window.alert("Tittle or Cover Image cannot be empty");
        } else {
            create_plans.push(create_plan);
            localStorage.setItem("plan", JSON.stringify(create_plans));
            window.location.href = "index.html";
        }
    });
});
