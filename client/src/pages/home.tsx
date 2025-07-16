import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Mail, 
  Download, 
  BarChart3, 
  Scale, 
  Code, 
  Users, 
  Palette, 
  Laptop,
  Linkedin,
  GraduationCap
} from "lucide-react";
import profilePhoto from "@assets/profile-photo.jpg";

export default function Home() {
  const handleDownloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.download = 'Yiran_Wang_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-semibold text-xl text-blue-900">Yiran Wang</div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                Yiran Wang
                <span className="block text-2xl lg:text-3xl font-medium text-blue-600 mt-2">
                  (Stella)
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">International Tax Analyst</p>
              <div className="space-y-2 mb-8">
                <p className="text-gray-600 flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                  Beijing, China
                </p>
                <p className="text-gray-600 flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-blue-600" />
                  yiranw514@gmail.com
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleDownloadResume}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src={profilePhoto} 
                    alt="Yiran Wang professional photo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <BarChart3 className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed text-center mb-8">
              Aspiring international tax analyst with a strong academic foundation in global tax law and cross-border compliance. 
              Experienced in optimizing tax strategies for multinational corporations through legal and data-driven methods. 
              Passionate about research, technology, and leveraging interdisciplinary skills to solve complex economic challenges.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-blue-50 border-none">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                    <h3 className="text-xl font-semibold text-blue-900">Education</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Central University of Finance and Economics</p>
                    <p className="text-gray-600">Bachelor's Degree in Progress – Class of 2028</p>
                    <p className="text-gray-600">Major: International Taxation and Law</p>
                    <p className="text-gray-600">Beijing, China</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Languages</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Chinese</span>
                      <Badge variant="secondary">Native</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>English</span>
                      <Badge variant="secondary">Fluent (IELTS 7.0)</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Core Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Scale className="w-6 h-6 text-white" />,
                title: "Tax Law & Compliance",
                description: "International tax law, multinational tax strategy, and risk mitigation expertise"
              },
              {
                icon: <Code className="w-6 h-6 text-white" />,
                title: "Programming",
                description: "Python, MySQL, C Programming, and data analysis tools"
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-white" />,
                title: "Data Analysis",
                description: "Research, policy analysis, and financial data interpretation"
              },
              {
                icon: <Users className="w-6 h-6 text-white" />,
                title: "Leadership",
                description: "Academic department head, student union president, team management"
              },
              {
                icon: <Palette className="w-6 h-6 text-white" />,
                title: "Design",
                description: "Graphic design, visual communication, and presentation materials"
              },
              {
                icon: <Laptop className="w-6 h-6 text-white" />,
                title: "Microsoft Office",
                description: "Advanced Excel, PowerPoint, Word, and Outlook proficiency"
              }
            ].map((skill, index) => (
              <Card key={index} className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{skill.title}</h3>
                  <p className="text-gray-600">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Experience & Achievements</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {[
              {
                period: "2024 - Present",
                organization: "Central University of Finance and Economics",
                title: "Academic Practice Department Head",
                description: "Led academic events, external projects, and internal coordination for department-wide initiatives. Oversaw class-level activities and served as liaison between faculty and students."
              },
              {
                period: "2024",
                organization: "State Tax Bureau",
                title: "Winter Intern",
                description: "Supported the review of tax data and policy documents. Gained practical insights into daily tax administration and compliance work."
              },
              {
                period: "2024",
                organization: "Research Project",
                title: "International Economic & Political Security Research",
                description: "Focused on China's local government debt system and fiscal risk mitigation strategies. Collected and organized international tax data and multinational corporate case studies."
              }
            ].map((exp, index) => (
              <Card key={index} className="bg-blue-50 border-none">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <div className="text-blue-600 font-semibold">{exp.period}</div>
                      <div className="text-gray-600">{exp.organization}</div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">{exp.title}</h3>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Academic Excellence</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { score: "96/100", subject: "Business English" },
              { score: "95/100", subject: "Public Speaking" },
              { score: "92/100", subject: "English Communication" },
              { score: "92/100", subject: "Macroeconomics" },
              { score: "91/100", subject: "Microeconomics" },
              { score: "90/100", subject: "Accounting" }
            ].map((achievement, index) => (
              <Card key={index} className="bg-white text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.score}</div>
                  <div className="text-gray-600">{achievement.subject}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-4" />
                  <span>yiranw514@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-4" />
                  <span>yiran_362880@berkeley.edu</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-4" />
                  <span>Beijing, China</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-5 h-5 mr-4" />
                  <a 
                    href="https://www.linkedin.com/in/yiran-wang-52961a374" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Ready to Connect?</h3>
              <p className="text-gray-300 mb-6">
                I'm actively seeking opportunities in international tax analysis and finance. 
                Let's discuss how my skills and passion can contribute to your team's success.
              </p>
              <Button 
                onClick={handleDownloadResume}
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Full Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2024 Yiran Wang (Stella). All rights reserved.</p>
            <p className="text-gray-400 mt-2">International Tax Analyst | Beijing, China</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
