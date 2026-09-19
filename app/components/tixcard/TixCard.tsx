"use client";

import { useState } from "react";
import { oswald, inter } from "../../fonts/fonts";
import Button from "../buttons";

interface TixCardProps {
  isOpen: boolean;
  onClose: () => void;
}

const TICKET_PRICE = 25;

const paymentOptions = ["CARD", "PAYPAL", "CASH AT DOOR"];

export default function TixCard({ isOpen, onClose }: TixCardProps) {
  const [step, setStep] = useState<"form" | "receipt">("form");
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [payment, setPayment] = useState(paymentOptions[0]);
  const [orderId, setOrderId] = useState("");

  if (!isOpen) return null;

  const total = quantity * TICKET_PRICE;

  const handleClose = () => {
    onClose();
    setStep("form");
    setQuantity(1);
    setName("");
    setEmail("");
    setPayment(paymentOptions[0]);
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderId(`VF-${Math.floor(100000 + Math.random() * 900000)}`);
    setStep("receipt");
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-6"
      onClick={handleClose}
    >
      <div
        className="bg-off-white p-8 max-w-md w-full flex flex-col gap-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-2xl leading-none cursor-pointer"
          aria-label="Close"
        >
          &times;
        </button>

        {step === "form" ? (
          <>
            <h2 className={`${oswald.className} font-bold text-4xl`}>
              GET TIX
            </h2>

            <form
              onSubmit={handleConfirm}
              className={`${inter.className} flex flex-col gap-5`}
            >
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">QUANTITY</label>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 border border-black text-lg cursor-pointer"
                  >
                    −
                  </button>
                  <span className="text-lg w-6 text-center">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-9 h-9 border border-black text-lg cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">NAME</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="your name"
                  className="border border-black px-3 py-2 bg-off-white text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">GMAIL</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@gmail.com"
                  className="border border-black px-3 py-2 bg-off-white text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">PAYMENT</label>
                <div className="flex flex-col gap-2">
                  {paymentOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 text-sm cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={option}
                        checked={payment === option}
                        onChange={() => setPayment(option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-black">
                <span className="text-sm font-bold">TOTAL</span>
                <span className="text-lg">${total}</span>
              </div>

              <Button
                size="lg"
                type="submit"
                className="bg-black text-off-white hover:bg-gray-800"
              >
                CONFIRM
              </Button>
            </form>
          </>
        ) : (
          <>
            <h2 className={`${oswald.className} font-bold text-4xl`}>
              RECEIPT
            </h2>

            <div className={`${inter.className} flex flex-col gap-3 text-sm`}>
              <div className="flex justify-between">
                <span className="font-bold">ORDER ID</span>
                <span>{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">NAME</span>
                <span>{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">GMAIL</span>
                <span>{email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">QUANTITY</span>
                <span>{quantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">PAYMENT</span>
                <span>{payment}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-black">
                <span className="font-bold">TOTAL</span>
                <span>${total}</span>
              </div>
            </div>

            <p className={`${inter.className} text-xs`}>
              a confirmation has been sent to {email}. see you at the show.
            </p>

            <Button
              size="lg"
              onClick={handleClose}
              className="bg-black text-off-white hover:bg-gray-800"
            >
              DONE
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
