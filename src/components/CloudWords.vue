<template>
  <div class="physics-container">
    <div ref="scene" class="scene"></div>
    <button v-if="showHardSkills" @click="resetWords" class="reset-button">
      <div class="group relative inline-block">
        <div
          class="flex items-center gap-2 px-3.5 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-md transition-all duration-300 ease-in-out cursor-pointer"
        >
          <span class="text-sm text-gray-600 font-medium">
            {{ $t("home.button_softskill") }}
          </span>
        </div>
      </div>
    </button>
    <button v-else @click="resetWords" class="reset-button">
      <div class="group relative inline-block">
        <div
          class="flex items-center gap-2 px-3.5 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-md transition-all duration-300 ease-in-out cursor-pointer"
        >
          <span class="text-sm text-gray-600 font-medium">
            {{ $t("home.button_hardskill") }}
          </span>
        </div>
      </div>
    </button>
  </div>
</template>

<script>
import Matter from "matter-js";

export default {
  name: "CloudWords",
  data() {
    return {
      engine: null,
      render: null,
      runner: null, // Ajout d'un runner pour l'animation
      hardSkills: [
        {
          text: "VueJS",
          size: 30,
          color: "rgba(52, 211, 153, 0.3)",
          borderColor: "rgba(52, 211, 153, 1)",
          category: "frontend",
        },
        {
          text: "ReactJS",
          size: 35,
          color: "rgba(45, 212, 191, 0.3)",
          borderColor: "rgba(45, 212, 191, 1)",
          category: "frontend",
        },
        {
          text: "AngularJS",
          size: 30,
          color: "rgba(239, 68, 68, 0.3)",
          borderColor: "rgba(239, 68, 68, 1)",
          category: "frontend",
        },

        {
          text: "NodeJS",
          size: 25,
          color: "rgba(52, 211, 153, 0.3)",
          borderColor: "rgba(52, 211, 153, 1)",
          category: "backend",
        },

        {
          text: "Spring Boot",
          size: 28,
          color: "rgba(132, 204, 22, 0.3)",
          borderColor: "rgba(132, 204, 22, 1)",
          category: "backend",
        },
        {
          text: "IA",
          size: 28,
          color: "rgba(155, 77, 230, 0.3)",
          borderColor: "rgba(155, 77, 230, 1)",
          category: "backend",
        },
        {
          text: "Quarkus",
          size: 22,
          color: "rgba(56, 189, 248, 0.3)",
          borderColor: "rgba(56, 189, 248, 1)",
          category: "backend",
        },

        {
          text: "PostgreSQL",
          size: 22,
          color: "rgba(56, 189, 248, 0.3)",
          borderColor: "rgba(56, 189, 248, 1)",
          category: "database",
        },
        {
          text: "MongoDB",
          size: 28,
          color: "rgba(132, 204, 22, 0.3)",
          borderColor: "rgba(132, 204, 22, 1)",
          category: "database",
        },
        {
          text: "Redis",
          size: 22,
          color: "rgba(251, 113, 133, 0.3)",
          borderColor: "rgba(251, 113, 133, 1)",
          category: "database",
        },
      ],
      softskills: [
        {
          text: "AGILE",
          size: 30,
          color: "rgba(14, 165, 233, 0.3)",
          borderColor: "rgba(14, 165, 233, 1)",
          category: "management",
        },
        {
          text: "Pipeline Gitlab",
          size: 35,
          color: "rgba(249, 115, 22, 0.3)",
          borderColor: "rgba(249, 115, 22, 1)",
          category: "devops",
        },
        {
          text: "Trello",
          size: 30,
          color: "rgba(113, 199, 236, 0.3)",
          borderColor: "rgba(113, 199, 236, 1)",
          category: "management",
        },
        {
          text: "Docker",
          size: 25,
          color: "rgba(113, 199, 236, 0.3)",
          borderColor: "rgba(113, 199, 236, 1)",
          category: "devops",
        },
        {
          text: "Git",
          size: 28,
          color: "rgba(249, 115, 22, 0.3)",
          borderColor: "rgba(249, 115, 22, 1)",
          category: "devops",
        },

        {
          text: "Micro services",
          size: 25,
          color: "rgba(251, 191, 36, 0.3)",
          borderColor: "rgba(251, 191, 36, 1)",
          category: "autre",
        },
        {
          text: "Google APIs",
          size: 28,
          color: "rgba(59, 130, 246, 0.3)",
          borderColor: "rgba(59, 130, 246, 1)",
          category: "autre",
        },
        {
          text: "Figma",
          size: 22,
          color: "rgba(167, 139, 250, 0.3)",
          borderColor: "rgba(167, 139, 250, 1)",
          category: "autre",
        },
        {
          text: "Web scrapping",
          size: 22,
          color: "rgba(239, 68, 68, 0.3)",
          borderColor: "rgba(239, 68, 68, 1)",
          category: "autre",
        },
      ],
      actualSkills: [],
      showHardSkills: (Boolean = true),
      wordBodies: [],
      positionsX: {
        frontend: 200,
        backend: 400,
        database: 600,
        autre: 200,
        devops: 400,
        management: 600,
      },
    };
  },
  mounted() {
    this.initPhysics();
  },
  methods: {
    initPhysics() {
      const Engine = Matter.Engine;
      const Render = Matter.Render;
      const World = Matter.World;
      const Bodies = Matter.Bodies;
      const Mouse = Matter.Mouse;
      const MouseConstraint = Matter.MouseConstraint;
      const Runner = Matter.Runner; // Ajout du Runner

      // Création du moteur avec gravité
      this.engine = Engine.create({
        gravity: {
          x: 0,
          y: 0.98, // Augmentation de la gravité pour un effet plus visible
        },
      });

      // Création du rendu
      this.render = Render.create({
        element: this.$refs.scene,
        engine: this.engine,
        options: {
          width: 800,
          height: 200,
          wireframes: false,
          background: "transparent",
        },
      });

      // Création des murs
      const walls = [
        Bodies.rectangle(400, 220, 800, 60, {
          isStatic: true,
          render: {
            fillStyle: "transparent",
          },
        }),
        Bodies.rectangle(-10, 200, 60, 600, {
          isStatic: true,
          render: {
            fillStyle: "#transparent",
          },
        }),
        Bodies.rectangle(810, 200, 60, 600, {
          isStatic: true,
          render: {
            fillStyle: "#transparent",
          },
        }),
      ];

      World.add(this.engine.world, walls);

      // Création des mots comme des corps physiques
      this.showHardSkills = !this.showHardSkills;
      this.showSkills(this.showHardSkills);

      // Ajout de l'interaction souris
      const mouse = Mouse.create(this.render.canvas);
      const mouseConstraint = MouseConstraint.create(this.engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.8,
          render: {
            visible: false,
          },
        },
      });

      World.add(this.engine.world, mouseConstraint);
      this.render.mouse = mouse;

      // Création et démarrage du runner pour l'animation continue
      this.runner = Runner.create();
      Runner.run(this.runner, this.engine);
      Render.run(this.render);

      Matter.Events.on(this.render, "afterRender", () => {
        const ctx = this.render.context;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        this.engine.world.bodies.forEach((body) => {
          if (
            body.label &&
            this.actualSkills.some((w) => w.text === body.label)
          ) {
            const word = this.actualSkills.find((w) => w.text === body.label);
            ctx.font = `18px Arial`;
            ctx.fillStyle = "#000";
            ctx.fillText(body.label, body.position.x, body.position.y);
          }
        });
      });
    },

    showSkills(isShowHardSkill) {
      const Bodies = Matter.Bodies;
      const World = Matter.World;

      // Suppression des anciens mots si ils existent
      if (this.wordBodies.length > 0) {
        World.remove(this.engine.world, this.wordBodies);
        this.wordBodies = [];
      }

      if (isShowHardSkill) this.actualSkills = this.hardSkills;
      else this.actualSkills = this.softskills;

      console.log(isShowHardSkill, this.actualSkills);

      // Initialisation des compteurs de position Y pour chaque catégorie
      const yPositions = { frontend: 50, backend: 50, database: 50 }; // Compteur Y pour chaque catégorie

      // Création des nouveaux mots avec des positions X fixes et empilées
      this.wordBodies = this.actualSkills.map((word, index) => {
        const category = word.category || "frontend"; // Si pas de catégorie, on considère 'frontend' par défaut
        const xPosition = this.positionsX[category]; // Récupération de la position X en fonction de la catégorie
        const yOffset = yPositions[category]; // Utilisation du compteur Y pour chaque catégorie

        const wordBody = Bodies.rectangle(
          xPosition,
          -50 - index * 60, // Position Y initiale pour faire tomber les mots
          word.text.length * 12,
          40,
          {
            render: {
              fillStyle: word.color,
              lineWidth: 1,
              strokeStyle: word.borderColor,
            },
            label: word.text,
            restitution: 0.6,
            friction: 0.1,
            density: 0.001,
            chamfer: { radius: 5 },
          }
        );

        // Mise à jour du compteur Y pour la catégorie correspondante
        yPositions[category] += 60;

        return wordBody;
      });

      World.add(this.engine.world, this.wordBodies);
    },

    triggerExplosion() {
      const World = Matter.World;
      const Bodies = Matter.Bodies;

      // Définir un rayon pour l'explosion
      const explosionRadius = 200; // Rayon de l'explosion

      // Parcours de tous les mots pour leur appliquer une force d'explosion
      this.wordBodies.forEach((body) => {
        // Calculer la position sous le rectangle
        const explosionCenterX = body.position.x;
        const explosionCenterY = body.position.y + 50; // 50px sous chaque mot

        // Calculer la direction et la force de l'explosion
        const forceMagnitude = 0.2; // Force de l'explosion

        // Appliquer une force radiale à chaque corps (explosion dans toutes les directions)
        const dx = body.position.x - explosionCenterX;
        const dy = body.position.y - explosionCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Si le corps est dans la zone de l'explosion
        if (distance < explosionRadius) {
          const forceX = (dx / distance) * forceMagnitude;
          const forceY = (dy / distance) * forceMagnitude;

          // Appliquer la force au corps
          Matter.Body.applyForce(body, body.position, { x: forceX, y: forceY });
        }
      });
    },

    resetWords() {
      this.showHardSkills = !this.showHardSkills;
      //this.createWords()
      this.showSkills(this.showHardSkills);
    },

    beforeDestroy() {
      if (this.runner) {
        Matter.Runner.stop(this.runner);
      }
      if (this.render) {
        Matter.Render.stop(this.render);
        this.render.canvas.remove();
        this.render.canvas = null;
        this.render.context = null;
        this.render.textures = {};
      }
    },
  },
};
</script>

<style scoped>
.physics-container {
  width: 800px;
  height: 200px;
  margin: 0 auto;
  position: relative;
}

.scene {
  width: 100%;
  height: 100%;
}

.reset-button {
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 8px 16px;
}
</style>
