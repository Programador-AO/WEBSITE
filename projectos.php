<?php include './includes/header-app.php' ?>
<div class="content">
  <section class="flex-col-center py-32 bg-secondaryB">
    <h1 class="title mb-12">PROJECTOS</h1>
    <p class="text w-560 line-20  mb-24">Acreditamos que a colaboração é a chave para a inovação. É por isso que incentivamos nossos membros a participarem de projetos de código aberto.</p>
    <div class="breadcrumb">
      <a href="/">Home</a>|<span>Projectos</span>
    </div>
  </section>
  <section class="section">
    <div class="flex-col w-full items-center">

      <div class="flex gap-28 mb-48 w-full">
        <select name="" id="" class="rounded w-216 h-42 bg-secondary border-gray white p-12">
          <option value="" selected>Categoria</option>
        </select>
        <input type="search" class="rounded w-full h-42 bg-secondary border-gray white p-12" placeholder="Pesquisar">
      </div>

      <div class="cards center w-full">
        <?php $projectos = [1, 2, 3, 4, 5, 6] ?>
        <?php foreach ($projectos as  $value) :  ?>
          <a href="#projecto" class="card bg-secondaryB zoom p-32 w-324 flex-col">
            <svg class="card-svg" width="167" height="167" viewBox="0 0 167 167" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M150.3 83.5C150.3 46.6682 120.332 16.7 83.5 16.7C46.6682 16.7 16.7 46.6682 16.7 83.5C16.7 120.332 46.6682 150.3 83.5 150.3C120.332 150.3 150.3 120.332 150.3 83.5ZM167 83.5C167 129.617 129.617 167 83.5 167C37.383 167 0 129.617 0 83.5C0 37.383 37.383 0 83.5 0C129.617 0 167 37.383 167 83.5ZM133.6 91.85C133.6 96.4592 129.859 100.2 125.25 100.2H91.85C82.6233 100.2 75.15 92.7268 75.15 83.5V41.75C75.15 37.1408 78.8908 33.4 83.5 33.4C88.1092 33.4 91.85 37.1408 91.85 41.75V75.15C91.85 79.7425 95.6075 83.5 100.2 83.5H125.25C129.859 83.5 133.6 87.2408 133.6 91.85Z" fill="#9103D5" />
            </svg>

            <h2 class="card-h2">Dedicação</h2>
            <p class="card-p">Você deve estar disposto a dedicar seu tempo e energia para aprender novas habilidades e tecnologias, aprimorar suas habilidades existentes e trabalhar em projetos desafiadores.</p>
          </a>
        <?php endforeach;  ?>
      </div>

      <a href="./projectos.php" class="button-primary-flat mt-64 w-124">Ver Todos</a>
    </div>
  </section>
</div>
<?php include './includes/footer-app.php'; ?>