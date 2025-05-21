
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import CommunityStories from '../components/CommunityStories';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedCounter from '../components/AnimatedCounter';
import { Button } from '@/components/ui/button';
import { useTheme } from '../contexts/ThemeContext';
import { useForm } from 'react-hook-form';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const Community = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [pledges, setPledges] = useState<string[]>([]);
  
  const form = useForm({
    defaultValues: {
      pledge: "",
      name: "",
    },
  });

  // Load existing pledges from localStorage
  useEffect(() => {
    const savedPledges = localStorage.getItem('waterPledges');
    if (savedPledges) {
      setPledges(JSON.parse(savedPledges));
    }
  }, []);

  const onSubmitPledge = (data: { pledge: string; name: string }) => {
    const newPledge = `${data.name}: ${data.pledge}`;
    const updatedPledges = [...pledges, newPledge];
    setPledges(updatedPledges);
    localStorage.setItem('waterPledges', JSON.stringify(updatedPledges));
    form.reset();
  };

  return (
    <div className="container mx-auto px-4 py-10 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-6 fade-in">{t('community.title')}</h1>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 animate-fade-in">
        {t('community.description')}
      </p>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 scroll-animation">{t('community.stories.title')}</h2>
        <CommunityStories />
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 scroll-animation">{t('community.impact.title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="scroll-animation">
            <CardContent className="p-4 text-center">
              <AnimatedCounter 
                end={250} 
                suffix="+" 
                className="text-4xl font-bold text-water" 
              />
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{t('community.impact.communities')}</p>
            </CardContent>
          </Card>
          <Card className="scroll-animation">
            <CardContent className="p-4 text-center">
              <AnimatedCounter 
                end={10} 
                suffix="M+" 
                className="text-4xl font-bold text-water" 
              />
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{t('community.impact.litersSaved')}</p>
            </CardContent>
          </Card>
          <Card className="scroll-animation">
            <CardContent className="p-4 text-center">
              <AnimatedCounter 
                end={15} 
                suffix="K+" 
                className="text-4xl font-bold text-water" 
              />
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{t('community.impact.farmers')}</p>
            </CardContent>
          </Card>
          <Card className="scroll-animation">
            <CardContent className="p-4 text-center">
              <AnimatedCounter 
                end={500} 
                suffix="+" 
                className="text-4xl font-bold text-water" 
              />
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{t('community.impact.schools')}</p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 scroll-animation">{t('community.pledge.title')}</h2>
        <div className="bg-water/5 dark:bg-water-dark/10 p-6 rounded-lg">
          <p className="mb-4">{t('community.pledge.description')}</p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitPledge)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('community.pledge.nameLabel')}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t('community.pledge.namePlaceholder')}
                        {...field}
                        className="dark:bg-gray-800"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="pledge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('community.pledge.pledgeLabel')}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t('community.pledge.pledgePlaceholder')}
                        {...field}
                        className="dark:bg-gray-800"
                      />
                    </FormControl>
                    <FormDescription>
                      {t('community.pledge.pledgeDescription')}
                    </FormDescription>
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="bg-water hover:bg-water/90 text-white font-medium py-2 px-4 rounded-md"
              >
                {t('community.pledge.submit')}
              </Button>
            </form>
          </Form>
          
          {pledges.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">{t('community.pledge.recentPledges')}</h3>
              <div className="space-y-2 max-h-60 overflow-y-auto p-2 border border-gray-200 dark:border-gray-700 rounded-md">
                {pledges.map((pledge, index) => (
                  <div 
                    key={index}
                    className="p-2 bg-white dark:bg-gray-800 rounded border border-gray-100 dark:border-gray-700 shadow-sm"
                  >
                    {pledge}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 scroll-animation">{t('community.subscribe.title')}</h2>
        <div className="bg-water/5 dark:bg-water-dark/10 p-6 rounded-lg">
          <p className="mb-4">{t('community.subscribe.description')}</p>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">{t('community.subscribe.nameLabel')}</label>
              <Input 
                type="text" 
                className="w-full px-3 py-2 dark:bg-gray-800" 
                placeholder={t('community.subscribe.namePlaceholder')} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{t('community.subscribe.emailLabel')}</label>
              <Input 
                type="email" 
                className="w-full px-3 py-2 dark:bg-gray-800" 
                placeholder={t('community.subscribe.emailPlaceholder')} 
              />
            </div>
            <Button 
              type="submit" 
              className="md:col-span-2 bg-water hover:bg-water/90 text-white font-medium py-2 px-4 rounded-md"
            >
              {t('community.subscribe.submit')}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Community;
