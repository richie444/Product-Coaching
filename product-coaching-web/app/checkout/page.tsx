"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Lock, CreditCard, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<"onetime" | "installment">("onetime");
  const [promoCode, setPromoCode] = useState("");
  const router = useRouter();

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // Process payment
    router.push("/checkout/success");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Complete Your Enrollment</h1>
          <p className="text-muted-foreground">
            You're one step away from transforming your product career
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Info */}
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>
                  Already have an account? <button onClick={() => router.push("/login")} className="text-primary hover:underline">Sign in</button>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="Jordan" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Davis" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="jordan@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <Input type="password" placeholder="Create a password" />
                </div>
              </CardContent>
            </Card>

            {/* Payment Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Choose Your Payment Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    paymentMethod === "onetime"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setPaymentMethod("onetime")}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">One-Time Payment</h4>
                        <Badge variant="secondary">Best Value</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Pay once, lifetime access
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">$149</div>
                      <div className="text-sm text-muted-foreground line-through">$299</div>
                    </div>
                  </div>
                </div>

                <div
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    paymentMethod === "installment"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setPaymentMethod("installment")}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">3 Monthly Installments</h4>
                      <p className="text-sm text-muted-foreground">
                        $59/month for 3 months
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">$59</div>
                      <div className="text-sm text-muted-foreground">per month</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Details */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCheckout} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Card Number</label>
                    <div className="relative">
                      <Input placeholder="4242 4242 4242 4242" />
                      <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Expiry Date</label>
                      <Input placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">CVC</label>
                      <Input placeholder="123" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Promo Code (Optional)</label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button type="button" variant="outline">
                        Apply
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4">
                    <ShieldCheck className="w-5 h-5 text-green-600" />
                    <span>Secure 256-bit SSL encrypted payment</span>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Lock className="w-4 h-4 mr-2" />
                    Complete Payment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">
                        Product Discovery & Research Masterclass
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        By Sarah Chen
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Original Price</span>
                    <span className="line-through">$299</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Discount</span>
                    <span className="text-green-600">-$150</span>
                  </div>
                  {promoCode && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Promo Code</span>
                      <span className="text-green-600">-$10</span>
                    </div>
                  )}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="text-lg font-semibold">Total</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold">${promoCode ? "139" : "149"}</div>
                      {paymentMethod === "onetime" && (
                        <div className="text-xs text-muted-foreground">one-time payment</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-3">
                  <h4 className="font-semibold text-sm">What's Included:</h4>
                  <div className="space-y-2 text-sm">
                    {[
                      "12.5 hours video content",
                      "42 lessons & exercises",
                      "15 downloadable resources",
                      "Certificate of completion",
                      "Lifetime access",
                      "Community membership",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ShieldCheck className="w-4 h-4" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
