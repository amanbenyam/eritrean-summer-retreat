import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const registrationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name too long"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20, "Phone number too long"),
  guests: z.number().min(1, "At least 1 guest required").max(10, "Maximum 10 guests"),
});

type RegistrationData = z.infer<typeof registrationSchema>;

interface RegistrationDialogProps {
  trigger?: React.ReactNode;
}

const RegistrationDialog = ({ trigger }: RegistrationDialogProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    guests: 1,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof typeof formData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = registrationSchema.parse({
        ...formData,
        guests: Number(formData.guests),
      });

      // Get existing registrations from localStorage
      const existingRegistrations = JSON.parse(
        localStorage.getItem("dehaiRetreatRegistrations") || "[]"
      );

      // Check if email already registered
      const alreadyRegistered = existingRegistrations.some(
        (reg: RegistrationData) => reg.email.toLowerCase() === validatedData.email.toLowerCase()
      );

      if (alreadyRegistered) {
        setErrors({ email: "This email is already registered" });
        setIsSubmitting(false);
        return;
      }

      // Add new registration with timestamp
      const newRegistration = {
        ...validatedData,
        registeredAt: new Date().toISOString(),
        id: crypto.randomUUID(),
      };

      existingRegistrations.push(newRegistration);
      localStorage.setItem(
        "dehaiRetreatRegistrations",
        JSON.stringify(existingRegistrations)
      );

      toast({
        title: "Registration Successful! 🎉",
        description: `Thank you ${validatedData.firstName}! You're registered for Dehai Retreat. A confirmation would be sent to ${validatedData.email}.`,
      });

      // Reset form and close dialog
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        guests: 1,
      });
      setOpen(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof RegistrationData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof RegistrationData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Registration Failed",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="hero" size="xl">
            Register
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-primary">
            Register for Dehai Retreat
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Join us for a weekend of culture, celebration, and connection.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder="Enter first name"
                className={errors.firstName ? "border-destructive" : ""}
              />
              {errors.firstName && (
                <p className="text-sm text-destructive">{errors.firstName}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder="Enter last name"
                className={errors.lastName ? "border-destructive" : ""}
              />
              {errors.lastName && (
                <p className="text-sm text-destructive">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter email address"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Enter phone number"
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests">Number of Guests (including yourself)</Label>
            <Input
              id="guests"
              type="number"
              min={1}
              max={10}
              value={formData.guests}
              onChange={(e) => handleInputChange("guests", parseInt(e.target.value) || 1)}
              className={errors.guests ? "border-destructive" : ""}
            />
            {errors.guests && (
              <p className="text-sm text-destructive">{errors.guests}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            variant="warm"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Complete Registration"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;
