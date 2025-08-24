// Navigation
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".section")
  sections.forEach((section) => section.classList.remove("active"))

  // Show target section
  document.getElementById(sectionId).classList.add("active")

  // Update navigation
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => link.classList.remove("active"))
  document.querySelector(`[href="#${sectionId}"]`).classList.add("active")

  // Scroll to top
  window.scrollTo(0, 0)
}

// Navigation event listeners
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const sectionId = this.getAttribute("href").substring(1)
      showSection(sectionId)
    })
  })
})

// Module functionality
function openModule(moduleType) {
  const modal = document.getElementById("moduleModal")
  const modalBody = document.getElementById("modalBody")

  let content = ""

  switch (moduleType) {
    case "materials":
      content = `
                <h2><i class="fas fa-books"></i> Materiais Didáticos</h2>
                <div class="module-content">
                    <div class="subjects-grid">
                        <div class="subject-card">
                            <i class="fas fa-calculator"></i>
                            <h3>Matemática</h3>
                            <p>Álgebra, Geometria, Cálculo</p>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 75%"></div>
                            </div>
                            <span class="progress-text">75% Concluído</span>
                        </div>
                        <div class="subject-card">
                            <i class="fas fa-book"></i>
                            <h3>Português</h3>
                            <p>Gramática, Literatura, Redação</p>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 60%"></div>
                            </div>
                            <span class="progress-text">60% Concluído</span>
                        </div>
                        <div class="subject-card">
                            <i class="fas fa-flask"></i>
                            <h3>Química</h3>
                            <p>Orgânica, Inorgânica, Físico-química</p>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 45%"></div>
                            </div>
                            <span class="progress-text">45% Concluído</span>
                        </div>
                        <div class="subject-card">
                            <i class="fas fa-atom"></i>
                            <h3>Física</h3>
                            <p>Mecânica, Termodinâmica, Óptica</p>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 30%"></div>
                            </div>
                            <span class="progress-text">30% Concluído</span>
                        </div>
                    </div>
                    <div class="recent-materials">
                        <h3>Materiais Recentes</h3>
                        <div class="material-list">
                            <div class="material-item">
                                <i class="fas fa-video"></i>
                                <div>
                                    <h4>Funções Quadráticas</h4>
                                    <p>Vídeo explicativo - 15 min</p>
                                </div>
                                <span class="material-status new">Novo</span>
                            </div>
                            <div class="material-item">
                                <i class="fas fa-file-pdf"></i>
                                <div>
                                    <h4>Resumo: Revolução Industrial</h4>
                                    <p>PDF - 8 páginas</p>
                                </div>
                                <span class="material-status">Lido</span>
                            </div>
                            <div class="material-item">
                                <i class="fas fa-gamepad"></i>
                                <div>
                                    <h4>Quiz: Tabela Periódica</h4>
                                    <p>Exercício interativo</p>
                                </div>
                                <span class="material-status">85%</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
      break

    case "tutor":
      content = `
                <h2><i class="fas fa-robot"></i> Tutor Virtual</h2>
                <div class="tutor-interface">
                    <div class="tutor-avatar">
                        <div class="avatar-circle">
                            <i class="fas fa-robot"></i>
                        </div>
                        <h3>EduBot</h3>
                        <p>Seu assistente de aprendizado personalizado</p>
                    </div>
                    <div class="tutor-features">
                        <div class="feature-item">
                            <i class="fas fa-question-circle"></i>
                            <div>
                                <h4>Tire Dúvidas</h4>
                                <p>Pergunte sobre qualquer matéria</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-lightbulb"></i>
                            <div>
                                <h4>Explicações Personalizadas</h4>
                                <p>Adaptadas ao seu nível de conhecimento</p>
                            </div>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-chart-line"></i>
                            <div>
                                <h4>Acompanhamento de Progresso</h4>
                                <p>Monitora seu desenvolvimento</p>
                            </div>
                        </div>
                    </div>
                    <div class="quick-questions">
                        <h4>Perguntas Frequentes</h4>
                        <div class="question-buttons">
                            <button class="question-btn" onclick="askQuestion('Como resolver equações do 2º grau?')">
                                Como resolver equações do 2º grau?
                            </button>
                            <button class="question-btn" onclick="askQuestion('Qual a diferença entre mitose e meiose?')">
                                Qual a diferença entre mitose e meiose?
                            </button>
                            <button class="question-btn" onclick="askQuestion('Como calcular porcentagem?')">
                                Como calcular porcentagem?
                            </button>
                        </div>
                    </div>
                </div>
            `
      break

    case "time":
      content = `
                <h2><i class="fas fa-calendar-alt"></i> Gestão de Tempo</h2>
                <div class="time-management">
                    <div class="schedule-overview">
                        <h3>Sua Agenda Hoje</h3>
                        <div class="schedule-items">
                            <div class="schedule-item current">
                                <div class="time">14:00 - 15:00</div>
                                <div class="activity">
                                    <h4>Matemática - Funções</h4>
                                    <p>Estudo dirigido</p>
                                </div>
                                <div class="status">Em andamento</div>
                            </div>
                            <div class="schedule-item">
                                <div class="time">15:30 - 16:30</div>
                                <div class="activity">
                                    <h4>Português - Redação</h4>
                                    <p>Prática de escrita</p>
                                </div>
                                <div class="status">Próximo</div>
                            </div>
                            <div class="schedule-item">
                                <div class="time">17:00 - 17:30</div>
                                <div class="activity">
                                    <h4>Pausa para Bem-estar</h4>
                                    <p>Exercícios de respiração</p>
                                </div>
                                <div class="status">Agendado</div>
                            </div>
                        </div>
                    </div>
                    <div class="pomodoro-timer">
                        <h3>Timer Pomodoro</h3>
                        <div class="timer-display">
                            <div class="timer-circle">
                                <span class="timer-text">25:00</span>
                            </div>
                        </div>
                        <div class="timer-controls">
                            <button class="timer-btn" onclick="startTimer()">
                                <i class="fas fa-play"></i> Iniciar
                            </button>
                            <button class="timer-btn" onclick="pauseTimer()">
                                <i class="fas fa-pause"></i> Pausar
                            </button>
                            <button class="timer-btn" onclick="resetTimer()">
                                <i class="fas fa-stop"></i> Parar
                            </button>
                        </div>
                    </div>
                    <div class="productivity-stats">
                        <h3>Estatísticas da Semana</h3>
                        <div class="stats-grid">
                            <div class="stat-item">
                                <i class="fas fa-clock"></i>
                                <div>
                                    <span class="stat-number">18h</span>
                                    <span class="stat-label">Tempo de Estudo</span>
                                </div>
                            </div>
                            <div class="stat-item">
                                <i class="fas fa-tasks"></i>
                                <div>
                                    <span class="stat-number">24</span>
                                    <span class="stat-label">Tarefas Concluídas</span>
                                </div>
                            </div>
                            <div class="stat-item">
                                <i class="fas fa-medal"></i>
                                <div>
                                    <span class="stat-number">5</span>
                                    <span class="stat-label">Metas Atingidas</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
      break

    case "skills":
      content = `
                <h2><i class="fas fa-users"></i> Habilidades Socioemocionais</h2>
                <div class="skills-development">
                    <div class="skills-progress">
                        <h3>Seu Desenvolvimento</h3>
                        <div class="skill-bars">
                            <div class="skill-bar">
                                <div class="skill-info">
                                    <span>Comunicação</span>
                                    <span>75%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 75%"></div>
                                </div>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-info">
                                    <span>Trabalho em Equipe</span>
                                    <span>60%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 60%"></div>
                                </div>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-info">
                                    <span>Liderança</span>
                                    <span>45%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 45%"></div>
                                </div>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-info">
                                    <span>Resolução de Problemas</span>
                                    <span>80%</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: 80%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="available-courses">
                        <h3>Cursos Disponíveis</h3>
                        <div class="courses-grid">
                            <div class="course-card">
                                <i class="fas fa-comments"></i>
                                <h4>Comunicação Eficaz</h4>
                                <p>Aprenda a se expressar com clareza</p>
                                <div class="course-meta">
                                    <span><i class="fas fa-clock"></i> 2h</span>
                                    <span><i class="fas fa-star"></i> 4.8</span>
                                </div>
                                <button class="btn btn-primary">Iniciar Curso</button>
                            </div>
                            <div class="course-card">
                                <i class="fas fa-handshake"></i>
                                <h4>Networking</h4>
                                <p>Construa relacionamentos profissionais</p>
                                <div class="course-meta">
                                    <span><i class="fas fa-clock"></i> 1.5h</span>
                                    <span><i class="fas fa-star"></i> 4.6</span>
                                </div>
                                <button class="btn btn-primary">Iniciar Curso</button>
                            </div>
                            <div class="course-card">
                                <i class="fas fa-briefcase"></i>
                                <h4>Preparação para Entrevistas</h4>
                                <p>Simule entrevistas de emprego</p>
                                <div class="course-meta">
                                    <span><i class="fas fa-clock"></i> 3h</span>
                                    <span><i class="fas fa-star"></i> 4.9</span>
                                </div>
                                <button class="btn btn-primary">Iniciar Curso</button>
                            </div>
                        </div>
                    </div>
                    <div class="achievements">
                        <h3>Suas Conquistas</h3>
                        <div class="achievement-badges">
                            <div class="achievement-badge earned">
                                <i class="fas fa-medal"></i>
                                <span>Comunicador</span>
                            </div>
                            <div class="achievement-badge earned">
                                <i class="fas fa-users"></i>
                                <span>Colaborador</span>
                            </div>
                            <div class="achievement-badge">
                                <i class="fas fa-crown"></i>
                                <span>Líder</span>
                            </div>
                            <div class="achievement-badge">
                                <i class="fas fa-lightbulb"></i>
                                <span>Inovador</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
      break

    case "community":
      content = `
                <h2><i class="fas fa-comments"></i> Comunidade</h2>
                <div class="community-hub">
                    <div class="community-stats">
                        <div class="stat-card">
                            <i class="fas fa-users"></i>
                            <div>
                                <span class="stat-number">156</span>
                                <span class="stat-label">Membros Online</span>
                            </div>
                        </div>
                        <div class="stat-card">
                            <i class="fas fa-comments"></i>
                            <div>
                                <span class="stat-number">1,234</span>
                                <span class="stat-label">Discussões Ativas</span>
                            </div>
                        </div>
                        <div class="stat-card">
                            <i class="fas fa-question"></i>
                            <div>
                                <span class="stat-number">89</span>
                                <span class="stat-label">Dúvidas Respondidas</span>
                            </div>
                        </div>
                    </div>
                    <div class="study-groups">
                        <h3>Grupos de Estudo</h3>
                        <div class="groups-list">
                            <div class="group-card">
                                <div class="group-info">
                                    <h4>Matemática - ENEM 2024</h4>
                                    <p>Preparação focada para o ENEM</p>
                                    <div class="group-meta">
                                        <span><i class="fas fa-users"></i> 45 membros</span>
                                        <span><i class="fas fa-clock"></i> Ativo há 2h</span>
                                    </div>
                                </div>
                                <button class="btn btn-primary">Participar</button>
                            </div>
                            <div class="group-card">
                                <div class="group-info">
                                    <h4>Redação e Literatura</h4>
                                    <p>Discussões sobre textos e escrita</p>
                                    <div class="group-meta">
                                        <span><i class="fas fa-users"></i> 32 membros</span>
                                        <span><i class="fas fa-clock"></i> Ativo há 1h</span>
                                    </div>
                                </div>
                                <button class="btn btn-primary">Participar</button>
                            </div>
                            <div class="group-card">
                                <div class="group-info">
                                    <h4>Ciências da Natureza</h4>
                                    <p>Física, Química e Biologia</p>
                                    <div class="group-meta">
                                        <span><i class="fas fa-users"></i> 28 membros</span>
                                        <span><i class="fas fa-clock"></i> Ativo há 30min</span>
                                    </div>
                                </div>
                                <button class="btn btn-primary">Participar</button>
                            </div>
                        </div>
                    </div>
                    <div class="recent-discussions">
                        <h3>Discussões Recentes</h3>
                        <div class="discussions-list">
                            <div class="discussion-item">
                                <div class="user-avatar">
                                    <img src="https://via.placeholder.com/40" alt="User">
                                </div>
                                <div class="discussion-content">
                                    <h4>Como resolver logaritmos complexos?</h4>
                                    <p>Estou com dificuldade em logaritmos com bases diferentes...</p>
                                    <div class="discussion-meta">
                                        <span>Por Maria Silva</span>
                                        <span>há 15 min</span>
                                        <span><i class="fas fa-reply"></i> 8 respostas</span>
                                    </div>
                                </div>
                            </div>
                            <div class="discussion-item">
                                <div class="user-avatar">
                                    <img src="https://via.placeholder.com/40" alt="User">
                                </div>
                                <div class="discussion-content">
                                    <h4>Dicas para redação nota 1000</h4>
                                    <p>Compartilhando algumas técnicas que me ajudaram muito!</p>
                                    <div class="discussion-meta">
                                        <span>Por João Santos</span>
                                        <span>há 1h</span>
                                        <span><i class="fas fa-reply"></i> 12 respostas</span>
                                    </div>
                                </div>
                            </div>
                            <div class="discussion-item">
                                <div class="user-avatar">
                                    <img src="https://via.placeholder.com/40" alt="User">
                                </div>
                                <div class="discussion-content">
                                    <h4>Grupo de estudos para Química Orgânica</h4>
                                    <p>Alguém interessado em formar um grupo para estudar juntos?</p>
                                    <div class="discussion-meta">
                                        <span>Por Ana Costa</span>
                                        <span>há 2h</span>
                                        <span><i class="fas fa-reply"></i> 5 respostas</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
      break

    case "wellness":
      content = `
                <h2><i class="fas fa-leaf"></i> Bem-estar</h2>
                <div class="wellness-center">
                    <div class="mood-tracker">
                        <h3>Como você está se sentindo hoje?</h3>
                        <div class="mood-options">
                            <button class="mood-btn" onclick="setMood('excellent')">
                                <span class="mood-emoji">😄</span>
                                <span>Excelente</span>
                            </button>
                            <button class="mood-btn" onclick="setMood('good')">
                                <span class="mood-emoji">😊</span>
                                <span>Bem</span>
                            </button>
                            <button class="mood-btn active" onclick="setMood('okay')">
                                <span class="mood-emoji">😐</span>
                                <span>Ok</span>
                            </button>
                            <button class="mood-btn" onclick="setMood('tired')">
                                <span class="mood-emoji">😴</span>
                                <span>Cansado</span>
                            </button>
                            <button class="mood-btn" onclick="setMood('stressed')">
                                <span class="mood-emoji">😰</span>
                                <span>Estressado</span>
                            </button>
                        </div>
                    </div>
                    <div class="wellness-activities">
                        <h3>Atividades de Bem-estar</h3>
                        <div class="activities-grid">
                            <div class="activity-card">
                                <i class="fas fa-wind"></i>
                                <h4>Respiração Guiada</h4>
                                <p>Exercícios de respiração para relaxar</p>
                                <button class="btn btn-primary" onclick="startBreathing()">
                                    <i class="fas fa-play"></i> Iniciar (5 min)
                                </button>
                            </div>
                            <div class="activity-card">
                                <i class="fas fa-om"></i>
                                <h4>Meditação</h4>
                                <p>Sessões de mindfulness</p>
                                <button class="btn btn-primary" onclick="startMeditation()">
                                    <i class="fas fa-play"></i> Meditar (10 min)
                                </button>
                            </div>
                            <div class="activity-card">
                                <i class="fas fa-music"></i>
                                <h4>Sons Relaxantes</h4>
                                <p>Música ambiente para concentração</p>
                                <button class="btn btn-primary" onclick="playRelaxingSounds()">
                                    <i class="fas fa-play"></i> Reproduzir
                                </button>
                            </div>
                            <div class="activity-card">
                                <i class="fas fa-walking"></i>
                                <h4>Pausa Ativa</h4>
                                <p>Exercícios leves e alongamentos</p>
                                <button class="btn btn-primary" onclick="startActiveBreak()">
                                    <i class="fas fa-play"></i> Começar (3 min)
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="wellness-tips">
                        <h3>Dica do Dia</h3>
                        <div class="tip-card">
                            <i class="fas fa-lightbulb"></i>
                            <div>
                                <h4>Técnica 20-20-20</h4>
                                <p>A cada 20 minutos de estudo, olhe para algo a 20 metros de distância por 20 segundos. Isso ajuda a descansar os olhos e reduzir a fadiga visual.</p>
                            </div>
                        </div>
                    </div>
                    <div class="wellness-stats">
                        <h3>Seu Progresso de Bem-estar</h3>
                        <div class="stats-grid">
                            <div class="stat-item">
                                <i class="fas fa-heart"></i>
                                <div>
                                    <span class="stat-number">7</span>
                                    <span class="stat-label">Dias Consecutivos</span>
                                </div>
                            </div>
                            <div class="stat-item">
                                <i class="fas fa-clock"></i>
                                <div>
                                    <span class="stat-number">45min</span>
                                    <span class="stat-label">Tempo de Relaxamento</span>
                                </div>
                            </div>
                            <div class="stat-item">
                                <i class="fas fa-smile"></i>
                                <div>
                                    <span class="stat-number">8.2</span>
                                    <span class="stat-label">Humor Médio</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
      break
  }

  modalBody.innerHTML = content
  modal.style.display = "block"
}

function closeModal() {
  document.getElementById("moduleModal").style.display = "none"
}

// Tutor Chat functionality
function openTutor() {
  document.getElementById("tutorChat").style.display = "flex"
  document.querySelector(".fab").style.display = "none"
}

function closeTutor() {
  document.getElementById("tutorChat").style.display = "none"
  document.querySelector(".fab").style.display = "flex"
}

function sendMessage() {
  const input = document.getElementById("chatInput")
  const message = input.value.trim()

  if (message) {
    const messagesContainer = document.querySelector(".chat-messages")

    // Add user message
    const userMessage = document.createElement("div")
    userMessage.className = "message user-message"
    userMessage.innerHTML = `<p>${message}</p>`
    messagesContainer.appendChild(userMessage)

    // Clear input
    input.value = ""

    // Simulate bot response
    setTimeout(() => {
      const botMessage = document.createElement("div")
      botMessage.className = "message bot-message"
      botMessage.innerHTML = `<p>Entendi sua pergunta sobre "${message}". Vou te ajudar com isso! Posso explicar o conceito passo a passo ou você prefere ver alguns exemplos práticos?</p>`
      messagesContainer.appendChild(botMessage)
      messagesContainer.scrollTop = messagesContainer.scrollHeight
    }, 1000)

    messagesContainer.scrollTop = messagesContainer.scrollHeight
  }
}

// Enter key support for chat
document.addEventListener("DOMContentLoaded", () => {
  const chatInput = document.getElementById("chatInput")
  if (chatInput) {
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage()
      }
    })
  }
})

// Modal close on outside click
window.onclick = (event) => {
  const modal = document.getElementById("moduleModal")
  if (event.target === modal) {
    closeModal()
  }
}

// Interactive functions for module content
function askQuestion(question) {
  // Simulate asking a question to the tutor
  alert(`Pergunta enviada: "${question}"\n\nO tutor virtual responderá em breve!`)
}

function startTimer() {
  alert("Timer Pomodoro iniciado! Foque nos estudos pelos próximos 25 minutos.")
}

function pauseTimer() {
  alert("Timer pausado. Você pode retomar quando quiser.")
}

function resetTimer() {
  alert("Timer resetado para 25:00.")
}

function setMood(mood) {
  const moodButtons = document.querySelectorAll(".mood-btn")
  moodButtons.forEach((btn) => btn.classList.remove("active"))
  event.target.closest(".mood-btn").classList.add("active")

  const moodMessages = {
    excellent: "Que ótimo! Continue assim!",
    good: "Muito bem! Mantenha o bom humor!",
    okay: "Tudo bem ter dias assim. Que tal uma atividade relaxante?",
    tired: "Parece que você precisa de um descanso. Que tal uma pausa?",
    stressed: "Vamos cuidar do seu bem-estar. Experimente nossos exercícios de respiração.",
  }

  alert(moodMessages[mood])
}

function startBreathing() {
  alert(
    "Iniciando exercício de respiração guiada...\n\nInspire por 4 segundos, segure por 4, expire por 4. Vamos começar!",
  )
}

function startMeditation() {
  alert("Sessão de meditação iniciada. Encontre uma posição confortável e feche os olhos.")
}

function playRelaxingSounds() {
  alert("Reproduzindo sons relaxantes... 🎵\n\nSons da natureza para ajudar na concentração.")
}

function startActiveBreak() {
  alert("Hora da pausa ativa! Levante-se e faça alguns alongamentos simples.")
}

// Contact form submission
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
      this.reset()
    })
  }
})


document.addEventListener("DOMContentLoaded", () => {
  
  const statNumbers = document.querySelectorAll(".stat-number")
  statNumbers.forEach((stat) => {
    const finalValue = stat.textContent
    stat.textContent = "0"

    setTimeout(() => {
      animateNumber(stat, finalValue)
    }, 500)
  })
})

function animateNumber(element, finalValue) {
  const isPercentage = finalValue.includes("%")
  const isTime = finalValue.includes("h")
  const numericValue = Number.parseInt(finalValue.replace(/[^\d]/g, ""))

  let current = 0
  const increment = numericValue / 50

  const timer = setInterval(() => {
    current += increment
    if (current >= numericValue) {
      current = numericValue
      clearInterval(timer)
    }

    let displayValue = Math.floor(current).toString()
    if (isPercentage) displayValue += "%"
    if (isTime) displayValue += "h"

    element.textContent = displayValue
  }, 30)
}


document.addEventListener("DOMContentLoaded", () => {
  const moduleCards = document.querySelectorAll(".module-card")
  moduleCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
  })
})

// Smooth scrolling for better UX
document.addEventListener("DOMContentLoaded", () => {
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = "smooth"
})
