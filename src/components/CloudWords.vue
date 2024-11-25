<template>
  <div class="physics-container">
    <div ref="scene" class="scene"></div>
    <button v-if="showHardSkills" @click="resetWords" class="reset-button">Voir les soft Skills</button>
    <button v-else @click="resetWords" class="reset-button">Voir les hard Skills</button>
  </div>
</template>

<script>
import Matter from 'matter-js'

export default {
  name: 'PhysicsWords',
  data() {
    return {
      engine: null,
      render: null,
      runner: null, // Ajout d'un runner pour l'animation
      hardSkills: [
        { text: 'VueJS', size: 30, color: 'rgba(52, 211, 153, 0.3)', borderColor: 'rgba(52, 211, 153, 1)' },
        { text: 'ReactJS', size: 35, color: 'rgba(45, 212, 191, 0.3)', borderColor: 'rgba(45, 212, 191, 1)' },
        { text: 'AngularJS', size: 30, color: 'rgba(239, 68, 68, 0.3)', borderColor: 'rgba(239, 68, 68, 1)' },
        { text: 'NodeJS', size: 25, color: 'rgba(52, 211, 153, 0.3)', borderColor: 'rgba(52, 211, 153, 1)' },
        { text: 'Spring Boot', size: 28, color: 'rgba(132, 204, 22, 0.3)', borderColor: 'rgba(132, 204, 22, 1)' },
        { text: 'Quarkus', size: 22, color: 'rgba(56, 189, 248, 0.3)', borderColor: 'rgba(56, 189, 248, 1)' },
        { text: 'Python', size: 25, color: 'rgba(251, 191, 36, 0.3)', borderColor: 'rgba(251, 191, 36, 1)' },
        { text: 'Intelligence artificielle', size: 28, color: 'rgba(155, 77, 230, 0.3)', borderColor: 'rgba(155, 77, 230, 1)' },
        { text: 'PostgreSQL', size: 22, color: 'rgba(56, 189, 248, 0.3)', borderColor: 'rgba(56, 189, 248, 1)' },
        { text: 'MongoDB', size: 28, color: 'rgba(132, 204, 22, 0.3)', borderColor: 'rgba(132, 204, 22, 1)' },
        { text: 'Redis', size: 22, color: 'rgba(251, 113, 133, 0.3)', borderColor: 'rgba(251, 113, 133, 1)' },
      ],
      softskills: [
      { text: 'Micro services', size: 25, color: 'rgba(251, 191, 36, 0.3)', borderColor: 'rgba(251, 191, 36, 1)' },
      { text: 'Google APIs', size: 28, color: 'rgba(59, 130, 246, 0.3)', borderColor: 'rgba(59, 130, 246, 1)' },
      { text: 'Pipeline Gitlab', size: 35, color: 'rgba(249, 115, 22, 0.3)', borderColor: 'rgba(249, 115, 22, 1)' },
      { text: 'Web scrapping', size: 22, color: 'rgba(239, 68, 68, 0.3)', borderColor: 'rgba(239, 68, 68, 1)' },

      { text: 'AGILE', size: 30, color: 'rgba(14, 165, 233, 0.3)', borderColor: 'rgba(14, 165, 233, 1)' },
        { text: 'Trello', size: 30, color: 'rgba(113, 199, 236, 0.3)', borderColor: 'rgba(113, 199, 236, 1)' },
        { text: 'Docker', size: 25, color: 'rgba(113, 199, 236, 0.3)', borderColor: 'rgba(113, 199, 236, 1)' },

        { text: 'Git', size: 28, color: 'rgba(249, 115, 22, 0.3)', borderColor: 'rgba(249, 115, 22, 1)' },
        { text: 'Figma', size: 22, color: 'rgba(167, 139, 250, 0.3)', borderColor: 'rgba(167, 139, 250, 1)' },
      ],
      actualSkills: [],
      showHardSkills: Boolean = true,
      wordBodies: [], // Stockage des corps pour pouvoir les réinitialiser
      positionsX: [200, 400, 600], // Trois positions X prédéfinies
    }
  },
  mounted() {
    this.initPhysics()
  },
  methods: {
    initPhysics() {
      const Engine = Matter.Engine
      const Render = Matter.Render
      const World = Matter.World
      const Bodies = Matter.Bodies
      const Mouse = Matter.Mouse
      const MouseConstraint = Matter.MouseConstraint
      const Runner = Matter.Runner // Ajout du Runner

      // Création du moteur avec gravité
      this.engine = Engine.create({
        gravity: {
          x: 0,
          y: 0.98 // Augmentation de la gravité pour un effet plus visible
        }
      })

      // Création du rendu
      this.render = Render.create({
        element: this.$refs.scene,
        engine: this.engine,
        options: {
          width: 800,
          height: 200,
          wireframes: false,
          background: 'transparent'
        }
      })

      // Création des murs
      const walls = [
        Bodies.rectangle(400, 220, 800, 60, {
          isStatic: true,
          render: {
            fillStyle: 'transparent'
          }
        }),
        Bodies.rectangle(-10, 200, 60, 600, {
          isStatic: true,
          render: {
            fillStyle: '#transparent'
          }
        }),
        Bodies.rectangle(810, 200, 60, 600, {
          isStatic: true,
          render: {
            fillStyle: '#transparent'
          }
        })
      ]

      World.add(this.engine.world, walls)

      // Création des mots comme des corps physiques
      this.showHardSkills = !this.showHardSkills;
      this.showSkills(this.showHardSkills)

      // Ajout de l'interaction souris
      const mouse = Mouse.create(this.render.canvas)
      const mouseConstraint = MouseConstraint.create(this.engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.8,
          render: {
            visible: false
          }
        }
      })

      World.add(this.engine.world, mouseConstraint)
      this.render.mouse = mouse

      // Création et démarrage du runner pour l'animation continue
      this.runner = Runner.create()
      Runner.run(this.runner, this.engine)
      Render.run(this.render)

      Matter.Events.on(this.render, 'afterRender', () => {
        const ctx = this.render.context;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        this.engine.world.bodies.forEach(body => {
          if (body.label && this.actualSkills.some(w => w.text === body.label)) {
            const word = this.actualSkills.find(w => w.text === body.label);
            ctx.font = `18px Arial`;
            ctx.fillStyle = '#000';
            ctx.fillText(body.label, body.position.x, body.position.y);
          }
        });
      });

   
    },

    showSkills(isShowHardSkill) {
      const Bodies = Matter.Bodies
      const World = Matter.World

      // Suppression des anciens mots si ils existent
      if (this.wordBodies.length > 0) {
        World.remove(this.engine.world, this.wordBodies)
        this.wordBodies = []
      }


      if(isShowHardSkill) this.actualSkills = this.hardSkills;
      else this.actualSkills = this.softskills;

      console.log(isShowHardSkill, this.actualSkills)

      // Création des nouveaux mots
      this.wordBodies = this.actualSkills.map((word, index) => {
        return Bodies.rectangle(
          this.positionsX[index % this.positionsX.length],
          -50 - (index * 60),
          word.text.length * 12,
          40,
          {
            render: {
              fillStyle: word.color,
              lineWidth: 1,
              strokeStyle: word.borderColor
              /*text: {
                content: word,
                size: 20,
                family: 'Arial',
                color: '#fff'
              }*/
            },
            label : word.text,
            restitution: 0.6,
            friction: 0.1,
            density: 0.001,
            chamfer: { radius: 5 },
          }
        )
      })

      World.add(this.engine.world, this.wordBodies)
    },

    resetWords() {
      this.showHardSkills = !this.showHardSkills;
      //this.createWords()
      this.showSkills(this.showHardSkills)
    },

    beforeDestroy() {
      if (this.runner) {
        Matter.Runner.stop(this.runner)
      }
      if (this.render) {
        Matter.Render.stop(this.render)
        this.render.canvas.remove()
        this.render.canvas = null
        this.render.context = null
        this.render.textures = {}
      }
    }
  }
}
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
  top: 20px;
  right: 20px;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.reset-button:hover {
  background-color: #45a049;
}
</style>

