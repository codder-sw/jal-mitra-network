
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle, ChevronRight, ChevronLeft, Trophy } from 'lucide-react';

interface Question {
  questionKey: string;
  options: {
    key: string;
    value: 'a' | 'b' | 'c' | 'd';
  }[];
  correctAnswer: 'a' | 'b' | 'c' | 'd';
}

const WaterConservationQuiz: React.FC = () => {
  const { t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);

  const questions: Question[] = [
    {
      questionKey: 'education.quiz.q1',
      options: [
        { key: 'education.quiz.q1.a', value: 'a' },
        { key: 'education.quiz.q1.b', value: 'b' },
        { key: 'education.quiz.q1.c', value: 'c' },
        { key: 'education.quiz.q1.d', value: 'd' },
      ],
      correctAnswer: 'c',
    },
    {
      questionKey: 'education.quiz.q2',
      options: [
        { key: 'education.quiz.q2.a', value: 'a' },
        { key: 'education.quiz.q2.b', value: 'b' },
        { key: 'education.quiz.q2.c', value: 'c' },
        { key: 'education.quiz.q2.d', value: 'd' },
      ],
      correctAnswer: 'b',
    },
    {
      questionKey: 'education.quiz.q3',
      options: [
        { key: 'education.quiz.q3.a', value: 'a' },
        { key: 'education.quiz.q3.b', value: 'b' },
        { key: 'education.quiz.q3.c', value: 'c' },
        { key: 'education.quiz.q3.d', value: 'd' },
      ],
      correctAnswer: 'c',
    },
    {
      questionKey: 'education.quiz.q4',
      options: [
        { key: 'education.quiz.q4.a', value: 'a' },
        { key: 'education.quiz.q4.b', value: 'b' },
        { key: 'education.quiz.q4.c', value: 'c' },
        { key: 'education.quiz.q4.d', value: 'd' },
      ],
      correctAnswer: 'a',
    },
    {
      questionKey: 'education.quiz.q5',
      options: [
        { key: 'education.quiz.q5.a', value: 'a' },
        { key: 'education.quiz.q5.b', value: 'b' },
        { key: 'education.quiz.q5.c', value: 'c' },
        { key: 'education.quiz.q5.d', value: 'd' },
      ],
      correctAnswer: 'd',
    },
  ];

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizFinished(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
  };

  const handleAnswerClick = (answer: string) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(answer);
    }
  };

  const checkAnswer = () => {
    if (selectedAnswer === null) return;

    setIsAnswerSubmitted(true);
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prevQuestion => prevQuestion - 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    }
  };

  const getOptionClass = (option: string) => {
    if (!isAnswerSubmitted) return selectedAnswer === option ? 'bg-water/20' : '';
    
    if (option === questions[currentQuestion].correctAnswer) {
      return 'bg-green-100 dark:bg-green-900/30 border-green-500';
    }
    
    if (selectedAnswer === option && option !== questions[currentQuestion].correctAnswer) {
      return 'bg-red-100 dark:bg-red-900/30 border-red-500';
    }
    
    return '';
  };

  if (!quizStarted) {
    return (
      <Card className="animate-fade-in shadow-lg dark:bg-gray-800">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">{t('education.quiz.title')}</CardTitle>
          <CardDescription className="text-lg">
            {t('education.quiz.description')}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button 
            onClick={startQuiz} 
            className="bg-water hover:bg-water-dark text-white font-medium py-2 px-6 rounded-md hover-scale"
          >
            {t('education.quiz.start')}
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (quizFinished) {
    return (
      <Card className="animate-fade-in shadow-lg dark:bg-gray-800">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            {score > 3 ? t('education.quiz.wellDone') : t('education.quiz.tryAgain')}
          </CardTitle>
          <div className="flex justify-center my-4">
            <Trophy className="h-16 w-16 text-yellow-500 animate-scale-up" />
          </div>
          <CardDescription className="text-xl">
            {t('education.quiz.yourScore')} {score}/{questions.length}
          </CardDescription>
        </CardHeader>
        <CardFooter className="justify-center pt-4">
          <Button 
            onClick={startQuiz} 
            className="bg-water hover:bg-water-dark text-white font-medium py-2 px-6 rounded-md hover-scale"
          >
            {t('education.quiz.start')}
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="animate-fade-in shadow-lg dark:bg-gray-800">
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {t('education.quiz.question')} {currentQuestion + 1}/{questions.length}
          </div>
          <div className="bg-water/10 px-3 py-1 rounded-full text-water font-medium">
            {t('education.quiz.score')}: {score}
          </div>
        </div>
        <CardTitle className="text-xl">{t(questions[currentQuestion].questionKey)}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {questions[currentQuestion].options.map((option) => (
          <div 
            key={option.value}
            onClick={() => handleAnswerClick(option.value)}
            className={`p-4 border rounded-md cursor-pointer transition-all duration-300 ${
              getOptionClass(option.value)
            } hover:border-water`}
          >
            <div className="flex items-start">
              <div className="flex-1">
                {t(option.key)}
              </div>
              {isAnswerSubmitted && option.value === questions[currentQuestion].correctAnswer && (
                <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
              )}
              {isAnswerSubmitted && selectedAnswer === option.value && 
                option.value !== questions[currentQuestion].correctAnswer && (
                <XCircle className="h-5 w-5 text-red-500 ml-2" />
              )}
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={previousQuestion}
          disabled={currentQuestion === 0}
          variant="outline"
          className="flex items-center space-x-1"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>{t('education.quiz.previous')}</span>
        </Button>
        
        {!isAnswerSubmitted ? (
          <Button 
            onClick={checkAnswer} 
            disabled={selectedAnswer === null}
            className="bg-water hover:bg-water-dark transition-colors"
          >
            {t('education.quiz.submit')}
          </Button>
        ) : (
          <Button 
            onClick={nextQuestion} 
            className="bg-water hover:bg-water-dark flex items-center space-x-1 transition-colors"
          >
            <span>
              {currentQuestion === questions.length - 1 
                ? t('education.quiz.finish') 
                : t('education.quiz.next')
              }
            </span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default WaterConservationQuiz;
