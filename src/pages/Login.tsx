import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Stethoscope, User, UserCog, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const { role } = useParams<{ role: string }>();
  const isTherapist = role === "therapist";
  const { toast } = useToast();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login - you can integrate with Lovable Cloud later
    setTimeout(() => {
      toast({
        title: "Login functionality",
        description: "Backend authentication will be set up when you enable Lovable Cloud.",
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen pt-20 bg-gradient-subtle flex items-center justify-center">
      <div className="container-custom py-12">
        <div className="max-w-md mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${isTherapist ? 'bg-primary' : 'bg-accent'}`}>
                {isTherapist ? (
                  <UserCog className="w-8 h-8 text-primary-foreground" />
                ) : (
                  <User className="w-8 h-8 text-accent-foreground" />
                )}
              </div>
              <h1 className="font-serif text-2xl font-bold text-foreground mb-2">
                {isTherapist ? "Therapist Login" : "Patient Login"}
              </h1>
              <p className="text-muted-foreground">
                {isTherapist 
                  ? "Access your therapist dashboard" 
                  : "Access your patient portal"}
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <a href="#" className="text-primary hover:underline">
                  Forgot password?
                </a>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center text-sm text-muted-foreground">
              {isTherapist ? (
                <p>
                  Are you a patient?{" "}
                  <Link to="/login/patient" className="text-primary hover:underline">
                    Patient Login
                  </Link>
                </p>
              ) : (
                <p>
                  Are you a therapist?{" "}
                  <Link to="/login/therapist" className="text-primary hover:underline">
                    Therapist Login
                  </Link>
                </p>
              )}
            </div>
          </div>

          {/* Clinic Branding */}
          <div className="mt-8 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
              <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
                <Stethoscope className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-serif font-semibold">PhysioFit Clinic</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
