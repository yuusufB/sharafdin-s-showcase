import { Header } from '@/components/Header';
import { MainContent } from '@/components/MainContent';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-card shadow-sm border border-section-border">
        <Header />
        
        <div className="flex flex-col lg:flex-row">
          {/* Main Content */}
          <div className="flex-1 lg:border-r border-section-border">
            <MainContent />
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-72 p-4 bg-sidebar-bg">
            <Sidebar />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
