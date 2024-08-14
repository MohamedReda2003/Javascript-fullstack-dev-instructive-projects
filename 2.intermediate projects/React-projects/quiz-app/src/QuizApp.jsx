import React, { useState } from 'react';

const all_questions = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
    { question: "Who is the CEO of Tesla?", options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"], answer: "Elon Musk" },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { question: "Which language is used for web development?", options: ["Python", "HTML", "Java", "C++"], answer: "HTML" },
    { question: "What is the smallest planet in our solar system?", options: ["Earth", "Mars", "Mercury", "Venus"], answer: "Mercury" },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "Korea", "Thailand"], answer: "Japan" },
    { question: "Who wrote 'Hamlet'?", options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Ernest Hemingway"], answer: "William Shakespeare" },
    { question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], answer: "100°C" },
    { question: "What is the largest desert in the world?", options: ["Gobi", "Sahara", "Kalahari", "Arabian"], answer: "Sahara" },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond" },
    { question: "What is the longest river in the world?", options: ["Nile", "Amazon", "Yangtze", "Mississippi"], answer: "Nile" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: "Leonardo da Vinci" },
    { question: "Which country is the largest by land area?", options: ["Canada", "Russia", "China", "USA"], answer: "Russia" },
    { question: "Who wrote the novel '1984'?", options: ["George Orwell", "Aldous Huxley", "Ernest Hemingway", "F. Scott Fitzgerald"], answer: "George Orwell" },
    { question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Osmium", "Oxide", "Ozone"], answer: "Oxygen" },
    { question: "In which year did the Titanic sink?", options: ["1912", "1905", "1923", "1898"], answer: "1912" },
    { question: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Baht"], answer: "Yen" },
    { question: "Which is the largest continent by area?", options: ["Africa", "Asia", "North America", "Europe"], answer: "Asia" },
    { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"], answer: "Albert Einstein" },
    { question: "Which country hosted the 2016 Summer Olympics?", options: ["China", "Brazil", "Russia", "UK"], answer: "Brazil" },
    { question: "Which is the most spoken language in the world?", options: ["English", "Mandarin", "Spanish", "Hindi"], answer: "Mandarin" },
    { question: "Who was the first man to walk on the moon?", options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"], answer: "Neil Armstrong" },
    { question: "Which organ is responsible for pumping blood throughout the body?", options: ["Lungs", "Liver", "Heart", "Kidneys"], answer: "Heart" },
    { question: "Which gas is most abundant in the Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], answer: "Nitrogen" },
    { question: "What is the smallest country in the world by area?", options: ["Monaco", "Malta", "San Marino", "Vatican City"], answer: "Vatican City" },
    { question: "What is the freezing point of water in Celsius?", options: ["0°C", "32°C", "100°C", "-273°C"], answer: "0°C" },
    { question: "Which artist is known for the painting 'Starry Night'?", options: ["Claude Monet", "Pablo Picasso", "Vincent van Gogh", "Salvador Dalí"], answer: "Vincent van Gogh" },
    { question: "Which city is known as the Big Apple?", options: ["Los Angeles", "Chicago", "New York", "San Francisco"], answer: "New York" },
    { question: "What is the largest mammal in the world?", options: ["Elephant", "Blue Whale", "Giraffe", "Rhino"], answer: "Blue Whale" },
    { question: "Which year did World War II end?", options: ["1939", "1945", "1941", "1950"], answer: "1945" },
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra" },
    { question: "Which chemical element has the symbol 'Fe'?", options: ["Lead", "Iron", "Fluorine", "Phosphorus"], answer: "Iron" },
    { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"], answer: "George Washington" },
    { question: "What is the tallest mountain in the world?", options: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"], answer: "Mount Everest" },
    { question: "Who invented the telephone?", options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"], answer: "Alexander Graham Bell" },
    { question: "Which country is known as the Land of the Midnight Sun?", options: ["Norway", "Finland", "Sweden", "Iceland"], answer: "Norway" },
    { question: "Which planet is known for having rings?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: "Saturn" },
    { question: "Who was the first woman to win a Nobel Prize?", options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Dorothy Hodgkin"], answer: "Marie Curie" },
    { question: "What is the most populous country in the world?", options: ["India", "China", "USA", "Indonesia"], answer: "China" },
    { question: "Which city is famous for its Carnival and Samba dance?", options: ["Rio de Janeiro", "Venice", "New Orleans", "Trinidad"], answer: "Rio de Janeiro" },
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Hg"], answer: "Au" },
    { question: "Which river flows through the Grand Canyon?", options: ["Mississippi", "Colorado", "Amazon", "Nile"], answer: "Colorado" },
    { question: "Which is the smallest bone in the human body?", options: ["Stapes", "Femur", "Tibia", "Fibula"], answer: "Stapes" },
    { question: "Which famous ship sank after hitting an iceberg?", options: ["Lusitania", "Britannic", "Titanic", "Queen Mary"], answer: "Titanic" },
    { question: "Which language is the official language of Brazil?", options: ["Spanish", "Portuguese", "French", "English"], answer: "Portuguese" },
    { question: "What is the hardest rock on Earth?", options: ["Granite", "Marble", "Quartz", "Diamond"], answer: "Diamond" },
    { question: "Which country has the most World Cup football (soccer) titles?", options: ["Germany", "Argentina", "Brazil", "Italy"], answer: "Brazil" },
    { question: "Which city is known as the City of Love?", options: ["Venice", "Paris", "Rome", "Vienna"], answer: "Paris" },
    { question: "Which organ in the human body is responsible for producing insulin?", options: ["Liver", "Pancreas", "Kidneys", "Spleen"], answer: "Pancreas" },
    { question: "Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
    { question: "Which composer is known for the symphonies 'Ode to Joy' and 'Fifth Symphony'?", options: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach", "Franz Schubert"], answer: "Ludwig van Beethoven" },
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], answer: "Ottawa" },
    { question: "Which bird is known for its impressive mimicry skills?", options: ["Crow", "Parrot", "Owl", "Sparrow"], answer: "Parrot" },
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["F. Scott Fitzgerald", "Harper Lee", "Jane Austen", "Ernest Hemingway"], answer: "Harper Lee" },
    { question: "Which planet is the hottest in the solar system?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Venus" },
    { question: "What is the smallest unit of life?", options: ["Molecule", "Atom", "Cell", "Organ"], answer: "Cell" },
    { question: "Which country is the origin of the pizza?", options: ["France", "Spain", "Italy", "Greece"], answer: "Italy" },
    { question: "What is the deepest point in the world's oceans?", options: ["Mariana Trench", "Java Trench", "Tonga Trench", "Puerto Rico Trench"], answer: "Mariana Trench" },
    { question: "Which is the largest land animal?", options: ["Elephant", "Rhino", "Hippo", "Giraffe"], answer: "Elephant" },
    { question: "Who wrote 'Pride and Prejudice'?", options: ["Emily Brontë", "Charlotte Brontë", "Jane Austen", "George Eliot"], answer: "Jane Austen" },
    { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
    { question: "Which chemical element has the symbol 'Na'?", options: ["Sodium", "Nitrogen", "Neon", "Nickel"], answer: "Sodium" },
    { question: "Who discovered penicillin?", options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Joseph Lister"], answer: "Alexander Fleming" },
    { question: "What is the capital of India?", options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"], answer: "New Delhi" },
    { question: "Which planet has the most moons?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
    { question: "Which blood type is known as the universal donor?", options: ["A", "B", "AB", "O"], answer: "O" },
    { question: "What is the national flower of Japan?", options: ["Lotus", "Sakura", "Rose", "Lily"], answer: "Sakura" },
    { question: "Which country is known for its fjords?", options: ["Norway", "Sweden", "Finland", "Denmark"], answer: "Norway" },
    { question: "Which instrument is associated with Sherlock Holmes?", options: ["Piano", "Violin", "Guitar", "Flute"], answer: "Violin" },
    { question: "What is the most abundant element in the universe?", options: ["Oxygen", "Carbon", "Hydrogen", "Helium"], answer: "Hydrogen" },
    { question: "Which country is the largest producer of coffee?", options: ["Colombia", "Vietnam", "Brazil", "Ethiopia"], answer: "Brazil" },
    { question: "What is the national dish of Spain?", options: ["Pizza", "Sushi", "Paella", "Tacos"], answer: "Paella" },
    { question: "Which country is home to the kangaroo?", options: ["South Africa", "Australia", "New Zealand", "India"], answer: "Australia" },
    { question: "Which element has the atomic number 1?", options: ["Helium", "Oxygen", "Hydrogen", "Carbon"], answer: "Hydrogen" },
    { question: "Which is the largest desert in the world?", options: ["Sahara", "Gobi", "Kalahari", "Antarctica"], answer: "Antarctica" },
    { question: "Which bird is known as the symbol of peace?", options: ["Eagle", "Dove", "Sparrow", "Crow"], answer: "Dove" },
    { question: "What is the national animal of Canada?", options: ["Moose", "Beaver", "Bear", "Eagle"], answer: "Beaver" },
    { question: "Which planet is known as the Earth’s twin?", options: ["Mars", "Venus", "Jupiter", "Saturn"], answer: "Venus" },
    { question: "Which is the longest bone in the human body?", options: ["Femur", "Tibia", "Fibula", "Humerus"], answer: "Femur" },
    { question: "What is the chemical symbol for silver?", options: ["Au", "Ag", "Pb", "Hg"], answer: "Ag" },
    { question: "Which country is the Eiffel Tower located in?", options: ["Spain", "France", "Italy", "Germany"], answer: "France" },
    { question: "Who is known as the Father of Computers?", options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"], answer: "Charles Babbage" },
    { question: "Which country is the origin of the martial art Taekwondo?", options: ["Japan", "China", "South Korea", "Thailand"], answer: "South Korea" },
    { question: "Which vitamin is produced when a person is exposed to sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin D" },
    { question: "Which planet is known as the Morning Star?", options: ["Mars", "Mercury", "Venus", "Jupiter"], answer: "Venus" },
    { question: "Which sport is known as the 'king of sports'?", options: ["Cricket", "Basketball", "Football (Soccer)", "Tennis"], answer: "Football (Soccer)" },
    { question: "Which country is known as the Land of Fire and Ice?", options: ["Iceland", "New Zealand", "Greenland", "Norway"], answer: "Iceland" },
    { question: "Who invented the World Wide Web?", options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"], answer: "Tim Berners-Lee" },
    { question: "Which ocean is the Bermuda Triangle located in?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "Atlantic Ocean" },
    { question: "Which element has the highest melting point?", options: ["Iron", "Tungsten", "Gold", "Silver"], answer: "Tungsten" },
    { question: "Which is the largest island in the world?", options: ["Borneo", "Greenland", "New Guinea", "Madagascar"], answer: "Greenland" },
    { question: "Which is the smallest planet in the solar system?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
    { question: "What is the national sport of Canada?", options: ["Hockey", "Basketball", "Lacrosse", "Soccer"], answer: "Lacrosse" },
    { question: "Which metal is known as 'fool’s gold'?", options: ["Gold", "Copper", "Iron", "Pyrite"], answer: "Pyrite" },
    { question: "Which country is famous for its pyramids?", options: ["Mexico", "Greece", "Egypt", "India"], answer: "Egypt" },
    { question: "Who is the author of 'The Catcher in the Rye'?", options: ["J.D. Salinger", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"], answer: "J.D. Salinger" },
    { question: "Which animal is known as the 'King of the Jungle'?", options: ["Lion", "Tiger", "Elephant", "Bear"], answer: "Lion" },
    { question: "Which river is the longest in Africa?", options: ["Zambezi", "Congo", "Nile", "Niger"], answer: "Nile" },
    { question: "Which is the tallest waterfall in the world?", options: ["Niagara Falls", "Angel Falls", "Victoria Falls", "Yosemite Falls"], answer: "Angel Falls" },
    { question: "Which element is known as the 'building block of life'?", options: ["Carbon", "Oxygen", "Nitrogen", "Hydrogen"], answer: "Carbon" },
    { question: "Which country is the leading producer of olive oil?", options: ["Greece", "Italy", "Spain", "Turkey"], answer: "Spain" },
    { question: "Which composer is known for the operas 'The Marriage of Figaro' and 'Don Giovanni'?", options: ["Ludwig van Beethoven", "Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Franz Schubert"], answer: "Wolfgang Amadeus Mozart" },
    { question: "Which country is famous for its maple syrup?", options: ["USA", "Canada", "Australia", "New Zealand"], answer: "Canada" },
    { question: "Which is the only mammal capable of true flight?", options: ["Bat", "Flying Squirrel", "Pigeon", "Eagle"], answer: "Bat" },
    { question: "Which is the largest country in Africa by land area?", options: ["Nigeria", "Algeria", "Egypt", "South Africa"], answer: "Algeria" },
    { question: "Who invented the light bulb?", options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "James Watt"], answer: "Thomas Edison" },
    { question: "Which planet has a day longer than its year?", options: ["Venus", "Mercury", "Mars", "Jupiter"], answer: "Venus" },
    { question: "Which country is the world’s largest producer of diamonds?", options: ["South Africa", "Russia", "Australia", "Canada"], answer: "Russia" },
    { question: "Which organ is known as the 'powerhouse of the cell'?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"], answer: "Mitochondria" },
    { question: "Which is the smallest ocean in the world?", options: ["Indian Ocean", "Atlantic Ocean", "Arctic Ocean", "Southern Ocean"], answer: "Arctic Ocean" },
    { question: "Who is the founder of Microsoft?", options: ["Steve Jobs", "Bill Gates", "Larry Page", "Sergey Brin"], answer: "Bill Gates" },
    { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
    { question: "Which city hosted the first modern Olympic Games in 1896?", options: ["Paris", "London", "Athens", "Rome"], answer: "Athens" }
  ];

function Choose_qsts(first_list){
    const shuffledList = first_list.sort(() => Math.random() - 0.5);
    const randomTenElements = shuffledList.slice(0, 5);
    return randomTenElements;
};
const questions = Choose_qsts(all_questions);
function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Function to handle answer selection
  const handleAnswerOptionClick = (option) => {
    setSelectedAnswer(option);
  };

  // Function to handle next question
  const handleNextQuestion = () => {
    const isCorrect = selectedAnswer === questions[currentQuestion].answer;

    if (isCorrect) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers([
        ...incorrectAnswers,
        { 
          question: questions[currentQuestion].question,
          correctAnswer: questions[currentQuestion].answer,
          selectedAnswer: selectedAnswer
        }
      ]);
    }

    setSelectedAnswer('');
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="quiz-app">
      {quizCompleted ? (
        <div className="results">
          <h2>Your Score: {score} / {questions.length}</h2>
          <h3>Questions You Answered Incorrectly:</h3>
          <ul>
            {incorrectAnswers.map((item, index) => (
              <li key={index}>
                <strong>Question:</strong> {item.question} <br />
                <strong>Your Answer:</strong> {item.selectedAnswer} <br />
                <strong>Correct Answer:</strong> {item.correctAnswer}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="question-section">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
                className={selectedAnswer === option ? 'selected' : ''}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            className="next-btn"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
