
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const FeedbackForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Feedback Submitted",
        description: "Thank you for your valuable feedback!",
        duration: 5000,
      });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <Card className="animate-fade-in shadow-lg dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{t('feedback.title')}</CardTitle>
        <CardDescription>
          {t('feedback.description')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium mb-1 dark:text-gray-300"
              >
                {t('feedback.name')}
              </label>
              <input 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-water focus:border-transparent transition-colors duration-300"
                placeholder={t('community.yourName')}
                required
              />
            </div>
            
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium mb-1 dark:text-gray-300"
              >
                {t('feedback.email')}
              </label>
              <input 
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-water focus:border-transparent transition-colors duration-300"
                placeholder={t('community.yourEmail')}
                required
              />
            </div>
            
            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium mb-1 dark:text-gray-300"
              >
                {t('feedback.message')}
              </label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-water focus:border-transparent transition-colors duration-300"
                required
              />
            </div>
          </div>

          <CardFooter className="px-0 pt-4">
            <Button 
              type="submit" 
              disabled={isSubmitting || isSubmitted}
              className={`w-full bg-water hover:bg-water-dark text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 ${
                isSubmitted ? 'bg-green-500 hover:bg-green-600' : ''
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  <span>Submitting...</span>
                </div>
              ) : isSubmitted ? (
                <div className="flex items-center justify-center">
                  <Check className="w-5 h-5 mr-2" />
                  <span>Submitted!</span>
                </div>
              ) : (
                t('feedback.submit')
              )}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default FeedbackForm;
