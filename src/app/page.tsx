"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import { Star } from 'lucide-react';

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
        <div id="product-card-two" data-section="product-card-two">
          <ProductCardTwo
            products={[
              {
                id: '1',
                brand: 'TechGear',
                name: 'Wireless Pro Headphones',
                price: '$299.99',
                rating: 5,
                reviewCount: '2.1k',
                imageSrc: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop&crop=center',
                imageAlt: 'Wireless Pro Headphones',
                onProductClick: () => console.log('Product 1 clicked')
              },
              {
                id: '2',
                brand: 'StyleCorp',
                name: 'Modern Office Chair',
                price: '$549.00',
                rating: 4,
                reviewCount: '892',
                imageSrc: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=500&h=500&fit=crop&crop=center',
                imageAlt: 'Modern Office Chair',
                onProductClick: () => console.log('Product 2 clicked')
              },
              {
                id: '3',
                brand: 'HomeLux',
                name: 'Smart Table Lamp',
                price: '$129.99',
                rating: 5,
                reviewCount: '1.5k',
                imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=center',
                imageAlt: 'Smart Table Lamp',
                onProductClick: () => console.log('Product 3 clicked')
              },
              {
                id: '4',
                brand: 'TechFlow',
                name: 'Bluetooth Speaker',
                price: '$89.99',
                rating: 4,
                reviewCount: '634',
                imageSrc: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop&crop=center',
                imageAlt: 'Bluetooth Speaker',
                onProductClick: () => console.log('Product 4 clicked')
              }
            ]}
            title="Featured Products"
            description="Discover our curated selection of premium products"
            tag="Best Sellers"
            tagIcon={Star}
            textboxLayout="default"
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
          />
        </div>
      </main>
    </ThemeProvider>
  );
}