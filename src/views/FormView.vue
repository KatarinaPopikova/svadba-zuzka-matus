<template>
  <section class="relative">
    <div
      class="min-h-screen bg-[#A67B5B] text-white flex justify-center items-center flex-col"
    >
      <div class="absolute top-0">
        <h2>Rátame s vami :)</h2>
        <h3 class="opacity-30">Prosíme vyplniť do 26. 5. 2023</h3>
      </div>
      <div class="flex justify-center items-center pt-10">
        <div class="max-w-screen-sm flex items-center flex-col">
          <div>
            <p class="p-full">
              Rádi bychom všechno připravili tak, abyste se na naší svatbě
              cítili dobře a měli všechno, co budete potřebovat. Chtěli bychom
              Vás tedy poprosit, abyste nám v tomto krátkém dotazníku
              zodpověděli několik otázek, ať víme, s čím a s kým počítat.
            </p>
          </div>
          <div class="mt-32 p-4 border-2 border-white w-fit">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeN0iA612AOrErB-blfc-38F_l1zYoMX63FbljYGwSvm0C8SA/viewform?usp=sf_link"
            >
              <!--              <font-awesome-icon icon="fa-solid fa-rectangle-list" />-->
              <span>Vyplniť dotazník</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FormView",
};
</script>

<style scoped></style>
