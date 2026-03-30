# Portfolio-Alo
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alondra Peralta — Portfolio</title>
  <meta name="description" content="Portfolio de Alondra Peralta — Técnica en Programación.">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Bricolage+Grotesque:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Manchas de color de fondo -->
  <div class="manchas" aria-hidden="true">
    <span class="m m1"></span>
    <span class="m m2"></span>
    <span class="m m3"></span>
    <span class="m m4"></span>
    <span class="m m5"></span>
  </div>

  <!-- =============================================
       TOPBAR
       ============================================= -->
  <nav class="topbar">
    <span class="logo">AP<span class="logo-punto">·</span></span>

    <div class="nav-dots" id="navDots"></div>

    <div class="nav-arr">
      <button class="arr" id="btnPrev" aria-label="Anterior">←</button>
      <button class="arr" id="btnNext" aria-label="Siguiente">→</button>
    </div>
  </nav>

  <!-- Contador -->
  <div class="cnt">
    <span id="cAct">01</span><span class="cnt-sl">/</span><span id="cTot">06</span>
  </div>

  <!-- =============================================
       VIEWPORT Y TRACK
       ============================================= -->
  <div class="vp">
    <div class="track" id="track">


      <!-- ========================================
           01 — HERO
           ======================================== -->
      <section class="slide s1">

        <div class="hero-layout">

          <!-- Texto izquierdo -->
          <div class="hero-izq">
            <p class="micro">portfolio · 2026</p>

            <h1 class="h-nombre">
              <span class="hn-1">Alondra</span>
              <span class="hn-2">Peralta</span>
            </h1>

            <!-- ✏️ Cambiá por tu rol -->
            <p class="hero-rol">Técnica en Programación<br>Desarrolladora Web</p>

            <div class="hero-btns">
              <button class="btn btn-lila" onclick="irA(4)">ver proyectos ↓</button>
              <!-- ✏️ href de tu CV -->
              <a href="#" class="btn btn-borde" download>CV</a>
            </div>
          </div>

          <!-- Stats derechos -->
          <div class="hero-der">
            <div class="stat-bloque">
              <!-- ✏️ -->
              <span class="sb-n">2+</span>
              <span class="sb-l">años<br>programando</span>
            </div>
            <div class="stat-bloque">
              <span class="sb-n">4+</span>
              <span class="sb-l">proyectos<br>realizados</span>
            </div>
            <div class="stat-bloque">
              <span class="sb-n">7°</span>
              <span class="sb-l">año en<br>curso</span>
            </div>
          </div>

        </div>

        <!-- Número grande decorativo -->
        <span class="deco-num" aria-hidden="true">01</span>

      </section>


      <!-- ========================================
           02 — SOBRE MÍ
           ======================================== -->
      <section class="slide s2">
        <div class="slide-wrap">

          <div class="slide-etiq">
            <span class="e-num">02</span>
            <span class="e-txt">sobre mí</span>
          </div>

          <div class="slide-cuerpo">

            <p class="micro">background</p>
            <h2 class="sh2">Sobre <em>mí</em></h2>

            <!-- ✏️ Tu descripción real -->
            <p class="parr">
              Soy <strong>Alondra Peralta</strong>, estudiante de 7° año del
              Técnico en Programación en la E.E.S.T. N°5 — Berazategui.
            </p>
            <p class="parr">
              <!-- ✏️ Contá quién sos, qué te apasiona -->
              Me considero una persona que disfruta crear proyectos donde se combinan la creatividad y la tecnología. En un entorno laboral, busco aportar lo mejor de mis ideas y conocimientos, adaptándome a lo que necesite el proyecto y respetando siempre las indicaciones del cliente o del equipo.
            </p>

            <!-- ✏️ Tus intereses -->
            <div class="tags">
              <span class="tag">HTML</span>
              <span class="tag">CSS</span>
              <span class="tag">PHP</span>
              <span class="tag">JavaScript</span>
              <span class="tag">MySQL</span>
            </div>

            <!-- Mini ficha -->
            <div class="ficha">
              <div class="fr">
                <span class="fk">disponibilidad</span>
                <!-- ✏️ -->
                <span class="fv"><span class="verde"></span>abierta</span>
              </div>
              <div class="fr">
                <span class="fk">buscando</span>
                <!-- ✏️ -->
                <span class="fv">pasantía · freelance</span>
              </div>
              <div class="fr">
                <span class="fk">ubicación</span>
                <span class="fv">Berazategui, BA</span>
              </div>
            </div>

          </div>
        </div>

        <span class="deco-num" aria-hidden="true">02</span>
      </section>


      <!-- ========================================
           03 — FORMACIÓN
           ======================================== -->
      <section class="slide s3">
        <div class="slide-wrap">

          <div class="slide-etiq">
            <span class="e-num">03</span>
            <span class="e-txt">educación</span>
          </div>

          <div class="slide-cuerpo">
            <p class="micro">formación académica</p>
            <h2 class="sh2"><em>Técnica</em> en Programación</h2>

            <div class="form-card">
              <div class="fc-top">
                <div>
                  <p class="fc-inst">Escuela Educacion Secundaria Agraria Nº1 — Florencio Varela</p>  
                  <p class="fc-carrera">Agropecuario - 5º</p>
                </div>
                <div>
                  <p class="fc-inst">EP Nº50 Ranelagh — Berazategui</p>
                  <p class="fc-carrera">Comun - 6º</p>
                </div>
                <div>
                  <span class="fc-7">5°2/6º3</span>
                  <span class="badge-lila">Completo</span>
                </div>
              </div>
            </div>
            <div class="form-card">
              <div class="fc-top">
                <div>
                  <p class="fc-inst">E.E.S.T. N°5 — Berazategui</p>
                  <p class="fc-carrera">Técnico en Programación</p>
                </div>
                <div>
                  <span class="fc-7">7°2</span>
                  <span class="badge-lila">en curso</span>
                </div>
              </div>

              <ul class="fc-list">
                <li>Último año — Egreso estimado 2026</li>
                <!-- ✏️ Tus materias -->
                <li>Materias: Programación · Sitios web Dinamicos · Organizacion y Metodos · Practicas Profecionalizantes</li>
                <!--
                  ✏️ Proyecto escolar:
                  <li><strong>Proyecto:</strong> Nombre — PHP, MySQL, HTML, CSS</li>
                -->
              </ul>
            </div>

            <!--
              ✏️ Cursos extra (descomentá si los tenés):
              <p class="micro" style="margin-top:26px">cursos adicionales</p>
              <div class="tags" style="margin-top:10px">
                <span class="tag">Nombre del curso</span>
              </div>
            -->

          </div>
        </div>

        <span class="deco-num" aria-hidden="true">03</span>
      </section>


      <!-- ========================================
           04 — SKILLS
           ======================================== -->
      <section class="slide s4">
        <div class="slide-wrap">

          <div class="slide-etiq">
            <span class="e-num">04</span>
            <span class="e-txt">habilidades</span>
          </div>

          <div class="slide-cuerpo">
            <p class="micro">expertise</p>
            <h2 class="sh2">Skills <em>técnicas</em> &amp; <em>personales</em></h2>

            <div class="sk-grid">

              <!-- TÉCNICAS -->
              <div class="sk-col">
                <p class="sk-cat">👩‍💻 técnicas</p>
                <ul class="sk-list">
                  <!-- ✏️ Tus lenguajes y nivel real -->
                  <li class="sk-fila">
                    <span class="sk-nm">HTML / CSS</span>
                    <span class="sk-lv lv-m">Intermedio</span>
                  </li>
                  <li class="sk-fila">
                    <span class="sk-nm">PHP</span>
                    <span class="sk-lv lv-a">Intermedio</span>
                  </li>
                  <li class="sk-fila">
                    <span class="sk-nm">JavaScript</span>
                    <span class="sk-lv lv-m">Intermedio</span>
                  </li>
                  <li class="sk-fila">
                    <span class="sk-nm">MySQL</span>
                    <span class="sk-lv lv-b">Básico-Int.</span>
                  </li>
                </ul>

                <p class="sk-cat" style="margin-top:18px">🛠 herramientas</p>
                <div class="tags" style="margin-top:10px">
                  <!-- ✏️ -->
                  <span class="tag">GitHub</span>
                  <span class="tag">VS Code</span>
                  <span class="tag">Netlify</span>
                  <span class="tag">Trello</span>
                </div>
              </div>

              <!-- PERSONALES -->
              <div class="sk-col">
                <p class="sk-cat">✨ personales</p>
                <ul class="sk-personal">
                  <!--
                    ✏️ Estas son tus cualidades como persona.
                    Cambiá las que no te representen.
                  -->
                  <li class="skp">
                    <span class="skp-ico"></span>
                    <div>
                      <span class="skp-nm">Aprendizaje rápido</span>
                      <span class="skp-d">Incorporo tecnologías nuevas con facilidad</span>
                    </div>
                  </li>
                  <li class="skp">
                    <span class="skp-ico"></span>
                    <div>
                      <span class="skp-nm">Organización</span>
                      <span class="skp-d">Gestión del tiempo y las prioridades</span>
                    </div>
                  </li>
                  <li class="skp">
                    <span class="skp-ico"></span>
                    <div>
                      <span class="skp-nm">Trabajo en equipo</span>
                      <span class="skp-d">Colaboro bien y escucho activamente</span>
                    </div>
                  </li>
                  <li class="skp">
                    <span class="skp-ico"></span>
                    <div>
                      <span class="skp-nm">Creatividad</span>
                      <span class="skp-d">Busco soluciones originales a cada problema</span>
                    </div>
                  </li>
                  <li class="skp">
                    <span class="skp-ico"></span>
                    <div>
                      <span class="skp-nm">Atención al detalle</span>
                      <span class="skp-d">Me importa que quede bien, no solo que funcione</span>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <span class="deco-num" aria-hidden="true">04</span>
      </section>


      <!-- ========================================
           05 — PROYECTOS
           ======================================== -->
      <section class="slide s5">
        <div class="slide-wrap">

          <div class="slide-etiq">
            <span class="e-num">05</span>
            <span class="e-txt">proyectos</span>
          </div>

          <div class="slide-cuerpo">
            <p class="micro">work</p>
            <h2 class="sh2"><em>Proyectos</em></h2>

            <div class="proy-wrap">
              <div class="proy-track" id="proyTrack">

                <!--
                  ✏️ CÓMO AGREGAR TUS FOTOS:
                  En .proy-img, cambiá el background-gradient por:
                  background-image: url('foto.jpg');
                  background-size: cover; background-position: center;
                -->

                <!-- PROYECTO 1 -->
                <article class="pcard">
                  <div class="pimg">
                    <img src="img/Casita_led.jpg" alt="Foto del proyecto Casita LED" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  
                  <div class="pdata">
                    <span class="p-yr">2022</span>
                    <h3 class="p-nm">Casita con iluminación LED (grupal)</h3>
                    <p class="p-ds">hicimos una casita con luces LED, donde aprendí lo básico de circuitos y cómo trabajar en grupo.</p>
                    <div class="chips">
                      <span class="chip">Electronica</span>
                      <span class="chip">Circuito</span>
                    </div>  
                    
                  </div>
                </article>

                <!-- PROYECTO 2 -->
                <article class="pcard">
                  <div class="pimg">
                    <img src="img/Servilletero.jpg" alt="Foto del proyecto Servilletero" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="pdata">
                    <!-- ✏️ -->
                    <span class="p-yr">2021</span>
                    <h3 class="p-nm">Servilletero (grupal)</h3>
                    <p class="p-ds">un proyecto más práctico y manual, donde trabajamos diseño y construcción.</p>
                    <div class="chips">
                      <!-- ✏️ -->
                      <span class="chip">Electronica</span>
                      <span class="chip">Circuito</span>
                    </div>
                  </div>
                </article>

                <!-- PROYECTO 3 -->
                <article class="pcard">
                  <div class="pimg">
                    <img src="img/Joystick.jpg" alt="Foto del proyecto Casita LED" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="pdata">
                    <span class="p-yr">2024</span><!-- ✏️ -->
                    <h3 class="p-nm">Joystick con Arduino</h3><!-- ✏️ -->
                    <p class="p-ds">Armamos un joystick usando partes de un teclado, combinando electrónica de ARDUINO.</p>
                    <div class="chips">
                      <span class="chip">Arduino</span><!-- ✏️ -->
                      <span class="chip">Programación</span>
                    </div>
                    <div class="p-btns">
                  </div>
                </article>

                <!-- PROYECTO 4 — Escolar -->
                <article class="pcard">
                  <div class="pimg">
                    <img src="img/App_Inventor.jpg" alt="Foto del proyecto Casita LED" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="pdata">
                    <span class="p-yr">2024</span>
                    <h3 class="p-nm">Juego en App Inventor</h3>
                    <p class="p-ds">desarrollé un juego donde un alien tiene que atrapar frutas para sumar puntos. Acá empecé a meterme más en la lógica de programación..</p>
                    <div class="chips">
                    </div>
                    <div class="p-btns">
                      <span class="badge-escolar">proyecto escolar</span>
                    </div>
                  </div>
                </article>

                <!-- PROYECTO 5 -->
                <article class="pcard">
                  <div class="pimg">
                    <img src="img/Sistema_gestion_de_alumnos.jpg" alt="Foto del proyecto Casita LED" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="pdata">
                    <span class="p-yr">2025</span><!-- ✏️ -->
                    <h3 class="p-nm">Sistema de gestión de alumnos</h3><!-- ✏️ -->
                    <p class="p-ds">hicimos una aplicación con distintos roles (usuario, alumno y profesor) para organizar información, lo que me ayudó a entender mejor cómo funcionan sistemas más completos.</p><!-- ✏️ -->
                    <div class="chips"><!-- ✏️ -->
                      <span class="chip">HTML</span>
                      <span class="chip">CSS</span>
                      <span class="chip">PHP</span>
                      <span class="chip">MySQL</span>
                      <span class="chip">JavaScript</span>
                    </div>
                  </div>
                </article>

              </div><!-- fin proy-track -->

              <div class="pnav">
                <button class="pnav-btn" id="proyPrev">←</button>
                <div class="pdots" id="proyDots"></div>
                <button class="pnav-btn" id="proyNext">→</button>
              </div>
            </div>

          </div>
        </div>

        <span class="deco-num" aria-hidden="true">05</span>
      </section>


      <!-- ========================================
           06 — CONTACTO
           ======================================== -->
      <section class="slide s6">
        <div class="slide-wrap">

          <div class="slide-etiq">
            <span class="e-num">06</span>
            <span class="e-txt">contacto</span>
          </div>

          <div class="slide-cuerpo">
            <p class="micro">escribime</p>

            <!-- ✏️ Cambiá por algo tuyo -->
            <h2 class="sh2 sh2-contact">¿Hablamos?<br><em>Estoy acá.</em></h2>

            <!-- ✏️ Completá todos los datos -->
            <div class="c-lista">

              <a href="mailto:tuemail@gmail.com" class="c-item">
                <span class="c-ico">✉</span>
                <div>
                  <span class="c-lbl">Email</span>
                  <span class="c-val">alonesteservian@gmail.com</span><!-- ✏️ -->
                </div>
              </a>

              <a href="https://wa.me/549XXXXXXXXXX" target="_blank" class="c-item">
                <span class="c-ico">📱</span>
                <div>
                  <span class="c-lbl">WhatsApp</span>
                  <span class="c-val">+54 9 11 6658-8088</span><!-- ✏️ -->
                </div>
              </a>

              <a href="https://linkedin.com/in/alondra-peralta" target="_blank" class="c-item">
                <span class="c-ico" style="font-weight:700;font-style:normal">in</span>
                <div>
                  <span class="c-lbl">LinkedIn</span>
                  <span class="c-val">linkedin.com/in/alondra-peralta</span><!-- ✏️ -->
                </div>
              </a>

              <a href="https://github.com/alondra-peralta" target="_blank" class="c-item">
                <span class="c-ico">⌥</span>
                <div>
                  <span class="c-lbl">GitHub</span>
                  <span class="c-val">github.com/alondra-peralta</span><!-- ✏️ -->
                </div>
              </a>

            </div>

            <!-- ✏️ CV real -->
            <a href="#" download class="btn btn-lila" style="margin-top:28px;display:inline-block">
              descargar CV ↓
            </a>

          </div>
        </div>

        <span class="deco-num" aria-hidden="true">06</span>
      </section>


    </div><!-- fin track -->
  </div><!-- fin vp -->

  <div class="hint" id="hint">← → para navegar entre secciones</div>

  <script src="app.js"></script>
</body>
</html>
