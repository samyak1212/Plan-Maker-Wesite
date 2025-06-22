document.addEventListener("DOMContentLoaded", () => {
    const plan_container = document.getElementById("plan_container");

    const Plans = JSON.parse(localStorage.getItem("plan")) || [];
    if (Plans.length != 0) {
        Plans.forEach((plan) => {
            const create_plan = plan; // Convert JSON string back to object
            console.log("Retrieved Plan:", create_plan);
            const li = document.createElement("li");
            const ul = document.createElement("ul");
            create_plan.Places.forEach((place) => {
                const LI = document.createElement("li");
                LI.classList.add("relative", "w-[100px]");
                LI.innerHTML = ` <p class="text-[12px] text-center mb-1">${place.Date}</p>
                                    <div
                                        class="before:absolute before:h-0.5 before:w-full before:bg-white before:top-[27%]">
                                        <div class="w-3 h-3 bg-white rounded-full absolute left-[40%]"></div>
                                    </div>

                            <p class="text-[14px] text-center mt-4 h-[70px]">${place.Place}</p>`;
                ul.appendChild(LI);
            });
            ul.classList.add("flex", "pt-3", "justify-center");

            const button = document.createElement("button");
            button.classList.add("bg-gray-950", "px-2", "py-1", "rounded-2xl", "text-[14px]");
            button.innerHTML = `More details`;

            li.classList.add(
                "bg-gray-900",
                "flex",
                "w-[98%]",
                "h-[240px]",
                "mt-3",
                "ml-2",
                "rounded-xl",
                "overflow-hidden"
            );
            li.innerHTML = `<div class="flex-1/6">
                            <img src=${create_plan.src} alt="photo" class="w-[500px] h-[240px] " />
                        </div>
                        <div class="flex-1/2 px-3 py-1.5" id="plan_right">
                            <h3 class="text-2xl font-semibold tracking-wide ">${create_plan.Tittle}</h3>
                            
                            
                            <div class="flex justify-between">
                                <span class="text-[12px] tracking-wider"
                                    >Status : <span class="text-green-500">Completed</span></span
                                >
                            <span class="text-[12px]  text-gray-400"> Member : <span>${create_plan.Members.length}</span> </span>

                                <span class="text-[10px] tracking-wider  text-gray-400"
                                    >Created/Updated at <span>(17/04/2024)</span></span
                                >
                            </div>

                            <hr />
                            <p class="mt-1 text-lg text-center">Timeline</p>
                            
                        </div>`;

            const rightdiv = li.querySelector("#plan_right");
            rightdiv.appendChild(ul);
            rightdiv.appendChild(button);
            plan_container.appendChild(li);
        });
    }
});
