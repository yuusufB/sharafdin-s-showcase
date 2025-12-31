import { Header } from '@/components/Header';
import { MainContent } from '@/components/MainContent';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-6 px-4">
      <div className="max-w-4xl mx-auto border border-page-border shadow-sm">
        <Header />
        
        <div className="flex flex-col lg:flex-row">
          {/* Main Content */}
          <div className="flex-1 border-r border-page-border">
            <MainContent />
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-56 p-3 bg-muted">
            <Sidebar />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
