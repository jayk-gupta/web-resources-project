import { useState } from 'react';
import { motion } from 'framer-motion';

// --- Web Development Basics Quiz Data ---
const webDevBasicsData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Highly Typed Machine Learning"],
        answer: "Hyper Text Markup Language",
    },
    {
        question: "Which CSS property is used to change the background color of an element?",
        options: ["color", "bgcolor", "background-color", "bg-color"],
        answer: "background-color",
    },
    {
        question: "Which JavaScript method is used to write to the browser's console?",
        options: ["console.write()", "document.write()", "console.log()", "window.log()"],
        answer: "console.log()",
    },
    {
        question: "What is the primary function of the React Virtual DOM?",
        options: ["To manage state only", "To speed up rendering by minimizing direct DOM manipulation", "To handle network requests", "To style components with CSS"],
        answer: "To speed up rendering by minimizing direct DOM manipulation",
    },
    {
        question: "In Tailwind CSS, which utility class centers an element horizontally?",
        options: ["text-center", "align-center", "mx-auto", "justify-center"],
        answer: "mx-auto",
    },
];

// Define primary and secondary accents for consistency
const PRIMARY_RED = "red-600";
const RED_GLOW_SHADOW = "shadow-[0_0_25px_rgba(220,38,38,0.9)]";
const SECONDARY_CYAN = "cyan-400";
const questions = webDevBasicsData;

const QuizPage = () => {
    // Start the quiz immediately without language selection
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [answeredCorrectly, setAnsweredCorrectly] = useState(null); // Track correct/incorrect state for a brief moment

    // Total questions for reward calculation
    const totalQuestions = questions.length;
    const passThreshold = totalQuestions * 0.8; // Set pass threshold to 80%

    // Handle option selection
    const handleAnswer = (selectedOption) => {
        if (answeredCorrectly !== null) return; // Prevent double clicking

        const isCorrect = selectedOption === questions[currentQuestionIndex].answer;
        
        if (isCorrect) {
            setScore(score + 1);
            setAnsweredCorrectly(true);
        } else {
            setAnsweredCorrectly(false);
        }

        // Delay moving to the next question to show feedback
        setTimeout(() => {
            setAnsweredCorrectly(null); // Clear feedback
            const nextQuestion = currentQuestionIndex + 1;
            
            if (nextQuestion < totalQuestions) {
                setCurrentQuestionIndex(nextQuestion);
            } else {
                setShowResults(true);
            }
        }, isCorrect ? 500 : 1000); // Wait 0.5s for correct, 1s for incorrect
    };

    // Reset quiz
    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResults(false);
    };

    // --- Results View ---
    if (showResults) {
        const passed = score >= passThreshold;
        const rewardXP = passed ? 100 : 25; // Define reward XP
        
        return (
            <div className="flex flex-col gap-8 justify-center items-center h-screen bg-gray-950 p-6">
                <h2 className={`text-5xl font-extrabold text-center ${passed ? `text-${SECONDARY_CYAN}` : `text-${PRIMARY_RED}`} ${RED_GLOW_SHADOW}`}>
                    {passed ? "🎉 VICTORY! CHALLENGE COMPLETE! 🎉" : "🚧 MISSION FAILED. TRY AGAIN. 😔"}
                </h2>
                <p className="text-4xl text-white font-bold">
                    Final Score: {score} / {totalQuestions}
                </p>
                
                {/* Reward Section */}
                <div className="text-2xl font-bold text-gray-300">
                    <p>REWARD: <span className={`text-${SECONDARY_CYAN} font-extrabold`}>+{rewardXP} XP</span></p>
                    {passed && <p className="mt-2 text-xl text-green-500">Achievement Unlocked: Web Basics Master!</p>}
                </div>

                <motion.button
                    onClick={restartQuiz}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 mt-4 rounded-xl font-bold text-lg bg-${PRIMARY_RED} text-white uppercase 
                                ${RED_GLOW_SHADOW} hover:shadow-[0_0_35px_rgba(220,38,38,1)]`}
                >
                    RESTART QUEST
                </motion.button>
            </div>
        );
    }

    // --- Main Quiz View ---
    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="flex flex-col gap-10 justify-center items-center min-h-screen bg-gray-950 p-6">
            
            <motion.h1 
                className={`text-5xl font-extrabold tracking-widest text-white uppercase ${RED_GLOW_SHADOW} drop-shadow-[0_0_20px_rgba(220,38,38,0.9)]`}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                WEB DEV BASICS QUIZ
            </motion.h1>

            <div className="w-full max-w-2xl p-8 bg-gray-800 border-4 border-cyan-700 rounded-2xl shadow-2xl">
                <p className={`text-xl font-bold mb-6 text-${SECONDARY_CYAN}`}>
                    Question {currentQuestionIndex + 1} of {totalQuestions}
                </p>
                
                <h2 className="text-3xl text-white mb-8 leading-relaxed">
                    {currentQuestion.question}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentQuestion.options.map((option, index) => {
                        let buttonClasses = `py-3 px-4 text-lg font-semibold text-left rounded-lg transition-all duration-200 border-2`;
                        
                        if (answeredCorrectly === true && option === currentQuestion.answer) {
                            // Correct Answer Feedback (Green)
                            buttonClasses += ' bg-green-700 border-green-500 shadow-xl';
                        } else if (answeredCorrectly === false && option === currentQuestion.answer) {
                            // Incorrect Answer Feedback (Red) - Showing the correct one
                             buttonClasses += ' bg-green-700 border-green-500 shadow-xl';
                        } else if (answeredCorrectly === false && option !== currentQuestion.answer) {
                            // Incorrect Answer Feedback (Grayed out)
                            buttonClasses += ' bg-gray-700 text-gray-400 border-gray-600 cursor-not-allowed opacity-50';
                        } else {
                            // Default State
                            buttonClasses += ` bg-gray-700 text-gray-100 border-gray-600 hover:bg-${PRIMARY_RED} hover:border-${PRIMARY_RED} hover:shadow-lg`;
                        }

                        return (
                            <motion.button
                                key={index}
                                onClick={() => handleAnswer(option)}
                                whileHover={{ scale: answeredCorrectly === null ? 1.05 : 1 }}
                                whileTap={{ scale: answeredCorrectly === null ? 0.95 : 1 }}
                                className={buttonClasses}
                                disabled={answeredCorrectly !== null} // Disable buttons while showing feedback
                            >
                                {option}
                            </motion.button>
                        );
                    })}
                </div>
            </div>
            <p className="text-xl text-gray-400">Current Score: {score}</p>
        </div>
    );
};

export default QuizPage;