"use client";
import ThemeProvider from '@/components/providers/ThemeProvider';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';

export default function Home() {
  return (
    <ThemeProvider 
      defaultButtonVariant="hover-magnetic" 
      defaultTextAnimation="entrance-slide" 
      borderRadius="rounded" 
      contentWidth="medium" 
      sizing="medium" 
      background="none" 
      cardStyle="glass-elevated" 
      primaryButtonStyle="gradient" 
      secondaryButtonStyle="glass" 
      showBlurBottom={false}
    >
      <main className="flex min-h-screen flex-col">
        <div id="metric-card-two" data-section="metric-card-two">
          <MetricCardTwo
            metrics={[
              { id: '1', value: '98%', description: 'Client Satisfaction Rate' },
              { id: '2', value: '50K+', description: 'Lines of Code Written' },
              { id: '3', value: '12+', description: 'Projects Completed' },
              { id: '4', value: '3+', description: 'Years Experience' }
            ]}
            title="Key Metrics"
            description="Performance indicators showcasing professional excellence"
            tag="Statistics"
            textboxLayout="default"
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            carouselMode="buttons"
          />
        </div>
      </main>
    </ThemeProvider>
  );
}