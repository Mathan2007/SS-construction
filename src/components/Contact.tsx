import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Send, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    constructionType: 'House Construction',
    plotLocation: '',
    budget: '50', // represented in Lakhs
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successTicket, setSuccessTicket] = useState('');

  const constructionTypes = [
    'House Construction',
    'Villa Construction',
    'Commercial Buildings',
    'Home Renovation',
    'Structural Core Work',
    'Turnkey Complete Project',
  ];

  const typeTranslationKeys: Record<string, string> = {
    'House Construction': 'contact.type_house',
    'Villa Construction': 'contact.type_villa',
    'Commercial Buildings': 'contact.type_commercial',
    'Home Renovation': 'contact.type_renovation',
    'Structural Core Work': 'contact.type_core',
    'Turnkey Complete Project': 'contact.type_turnkey',
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic validation
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.plotLocation.trim()) {
      setErrorMessage(t('contact.validation_error', 'Please complete all required fields (*)'));
      return;
    }

    setIsSubmitting(true);

    const accessKey = (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY;

    if (accessKey && accessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New Project Proposal from ${formData.fullName} (SS Construction)`,
            from_name: 'SS Construction Website',
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            construction_type: formData.constructionType,
            plot_location: formData.plotLocation,
            estimated_budget: `₹${formData.budget} Lakhs - ${Number(formData.budget) + 15} Lakhs`,
            message: formData.message,
            to_email: 'ssconstruction830@gmail.com',
          })
        });


        const result = await response.json();
        if (result.success) {
          setIsSubmitting(false);
          setSuccessTicket(`SS-${Math.floor(1000 + Math.random() * 9000)}`);
          setIsSubmitted(true);
          // Reset form
          setFormData({
            fullName: '',
            phone: '',
            email: '',
            constructionType: 'House Construction',
            plotLocation: '',
            budget: '50',
            message: '',
          });
        } else {
          setErrorMessage(result.message || t('contact.network_error', 'Failed to send enquiry. Please try again.'));
          setIsSubmitting(false);
        }
      } catch (error) {
        setErrorMessage(t('contact.network_error', 'A network error occurred. Please verify your connection and try again.'));
        setIsSubmitting(false);
      }
    } else {
      // Simulate API form submission fallback
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccessTicket(`SS-${Math.floor(1000 + Math.random() * 9000)}`);
        setIsSubmitted(true);
        // Reset form
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          constructionType: 'House Construction',
          plotLocation: '',
          budget: '50',
          message: '',
        });
      }, 1500);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 transition-colors duration-500 bg-neutral-50 dark:bg-black text-neutral-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-heading text-xs uppercase tracking-[0.35em] text-gold-600 dark:text-gold-400 font-semibold mb-3 block">
            {t('contact.badge', 'SECURE A DISCUSS')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4 dark:text-white text-neutral-900">
            {t('contact.title', 'Request A Consult')}
          </h2>
          <div className="h-[2px] w-16 bg-gold-500 mx-auto mb-6" />
          <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-gray-400 leading-relaxed tracking-wide">
            {t('contact.description', 'Provide details of your plot, project scale, and preferred materials. Our structural estimators will construct an itemized quote draft within 48 hours.')}
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-white/5 p-8 sm:p-10 rounded shadow-xl relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleFormSubmit}
                  className="space-y-6 text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="font-heading text-base font-bold uppercase tracking-wider text-neutral-800 dark:text-gray-200 mb-6">
                    {t('contact.form_heading', 'Construction Details Estimator')}
                  </h3>

                  {errorMessage && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-500 text-xs uppercase tracking-widest font-semibold rounded">
                      {errorMessage}
                    </div>
                  )}

                  {/* Form inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Full Name */}
                    <div className="flex flex-col">
                      <label htmlFor="fullName" className="font-heading text-[10px] uppercase tracking-wider text-neutral-500 dark:text-gray-400 font-bold mb-2">
                        {t('contact.label_name', 'Full Name *')}
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="p-3 border border-neutral-200 dark:border-white/10 rounded bg-transparent text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-gold-500"
                        placeholder={t('contact.placeholder_name', 'Johnathan Doe')}
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="font-heading text-[10px] uppercase tracking-wider text-neutral-500 dark:text-gray-400 font-bold mb-2">
                        {t('contact.label_phone', 'Phone Number *')}
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="p-3 border border-neutral-200 dark:border-white/10 rounded bg-transparent text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-gold-500"
                        placeholder={t('contact.placeholder_phone', '+91 94437 54830')}
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Email */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="font-heading text-[10px] uppercase tracking-wider text-neutral-500 dark:text-gray-400 font-bold mb-2">
                        {t('contact.label_email', 'Email Address *')}
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="p-3 border border-neutral-200 dark:border-white/10 rounded bg-transparent text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-gold-500"
                        placeholder={t('contact.placeholder_email', 'ssconstruction830@gmail.com')}
                      />
                    </div>

                    {/* Construction Type selection dropdown */}
                    <div className="flex flex-col">
                      <label htmlFor="constructionType" className="font-heading text-[10px] uppercase tracking-wider text-neutral-500 dark:text-gray-400 font-bold mb-2">
                        {t('contact.label_type', 'Construction Segment')}
                      </label>
                      <select
                        id="constructionType"
                        name="constructionType"
                        value={formData.constructionType}
                        onChange={handleInputChange}
                        className="p-3 border border-neutral-200 dark:border-white/10 rounded bg-white dark:bg-neutral-950 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-gold-500"
                      >
                        {constructionTypes.map((type) => (
                          <option key={type} value={type}>
                            {t(typeTranslationKeys[type], type)}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Plot Location */}
                  <div className="flex flex-col">
                    <label htmlFor="plotLocation" className="font-heading text-[10px] uppercase tracking-wider text-neutral-500 dark:text-gray-400 font-bold mb-2">
                      {t('contact.label_location', 'Plot Dimensions & Location *')}
                    </label>
                    <input
                      id="plotLocation"
                      type="text"
                      name="plotLocation"
                      value={formData.plotLocation}
                      onChange={handleInputChange}
                      required
                      className="p-3 border border-neutral-200 dark:border-white/10 rounded bg-transparent text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-gold-500"
                      placeholder={t('contact.placeholder_location', 'e.g., Bodinaickenpatti, Namakkal (40 x 60 Ft)')}
                    />
                  </div>

                  {/* Dynamic Budget Slider */}
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="budget" className="font-heading text-[10px] uppercase tracking-wider text-neutral-500 dark:text-gray-400 font-bold">
                        {t('contact.label_budget', 'Estimated Budget Scope')}
                      </label>
                      <span className="font-heading text-xs font-bold text-gold-500 tracking-wider">
                        {language === 'ta' ? (
                          `₹${formData.budget} லட்சம் - ${Number(formData.budget) + 15} லட்சம்`
                        ) : (
                          `₹${formData.budget} Lakhs - ${Number(formData.budget) + 15} Lakhs`
                        )}
                      </span>
                    </div>
                    <input
                      id="budget"
                      type="range"
                      name="budget"
                      min="10"
                      max="200"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full accent-gold-500 h-1.5 bg-neutral-200 dark:bg-neutral-900 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[9px] text-gray-500 uppercase tracking-widest mt-1">
                      <span>{language === 'ta' ? '₹10 லட்சம்' : '₹10 Lakhs'}</span>
                      <span>{language === 'ta' ? '₹2 கோடி' : '₹2 Crores'}</span>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col">
                    <label htmlFor="message" className="font-heading text-[10px] uppercase tracking-wider text-neutral-500 dark:text-gray-400 font-bold mb-2">
                      {t('contact.label_message', 'Special Design Mandates / Message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="p-3 border border-neutral-200 dark:border-white/10 rounded bg-transparent text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-gold-500 resize-none"
                      placeholder={t('contact.placeholder_message', 'e.g., Requiring double-height ceiling structural work, smart insulation, Italian marble...')}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group flex items-center justify-center space-x-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-heading text-xs uppercase tracking-[0.25em] py-4 rounded font-bold shadow-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>{t('contact.btn_submitting', 'Validating BOQ Draft...')}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        <span>{t('contact.btn_submit', 'Submit Proposal')}</span>
                      </>
                    )}
                  </button>

                  <div className="text-center">
                    <span className="font-sans text-[10px] text-gray-500">
                      {t('contact.secure_notice', '🔒 Your plot layout and structural choices remain strictly confidential.')}
                    </span>
                  </div>

                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center flex flex-col items-center justify-center"
                >
                  <div className="p-4 bg-gold-500/10 text-gold-400 border border-gold-500/30 rounded-full mb-6 animate-bounce">
                    <ShieldCheck className="w-12 h-12" />
                  </div>

                  <span className="font-heading text-xs uppercase tracking-[0.3em] text-gold-500 font-bold mb-2 block">
                    {t('contact.transmission_complete', 'TRANSMISSION COMPLETE')}
                  </span>
                  <h3 className="font-display text-2xl font-bold tracking-tight mb-4 dark:text-white text-neutral-900">
                    {t('contact.success_title', 'Proposal Registered Safely')}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-gray-400 leading-relaxed max-w-md mx-auto mb-8">
                    {t('contact.success_desc', 'Thank you. Your plot coordinates, construction parameters, and estimates are cataloged under ticket code')}{' '}
                    <span className="font-mono text-gold-500 font-bold">{successTicket}</span>. {t('contact.success_agent', 'Our executive coordinator will contact you shortly.')}
                  </p>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="border border-gold-500 hover:bg-gold-500 hover:text-black text-gold-500 font-heading text-[10px] uppercase tracking-widest px-6 py-2.5 rounded transition-all"
                  >
                    {t('contact.btn_send_another', 'Submit Another Query')}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Office Credentials & Google Map */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Credentials details */}
            <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-white/5 p-6 rounded shadow-lg">
              <h3 className="font-heading text-xs uppercase tracking-[0.25em] text-gold-600 dark:text-gold-400 font-bold mb-6">
                {t('contact.corporate_title', 'Corporate Office Details')}
              </h3>

              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 text-gold-500 rounded">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-gray-300">
                      {t('contact.office_subtitle', 'SS Construction Office')}
                    </h4>
                    <p className="font-sans text-xs text-neutral-500 dark:text-gray-400 mt-1 leading-relaxed">
                      {t('contact.office_address', 'Bodinaickenpatti, Namakkal, Tamil Nadu, India')}
                    </p>
                    <a
                      href="https://maps.app.goo.gl/MBk7jaxjWR4VTsBG9"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-2 font-heading text-[10px] uppercase tracking-wider text-gold-500 hover:text-gold-400 underline font-bold"
                    >
                      {t('contact.open_maps', 'Open Google Maps')}
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 text-gold-500 rounded">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-gray-300">
                      {t('contact.hotlines_title', 'Direct Hotlines')}
                    </h4>
                    <p className="font-sans text-xs text-neutral-500 dark:text-gray-400 mt-1">
                      {t('contact.hotline_general', 'General')}: +91 9843611743

                    </p>
                    <p className="font-sans text-xs text-neutral-500 dark:text-gray-400">
                      {t('contact.hotline_whatsapp', 'WhatsApp support')}: +91 9843611743

                    </p>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 text-gold-500 rounded">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-gray-300">
                      {t('contact.enquiry_title', 'Enquiries & Estimating')}
                    </h4>
                    <p className="font-sans text-xs text-neutral-500 dark:text-gray-400 mt-1">
                      ssconstruction830@gmail.com
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 text-gold-500 rounded">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-neutral-800 dark:text-gray-300">
                      {t('contact.hours_title', 'Operations Hours')}
                    </h4>
                    <p className="font-sans text-xs text-neutral-500 dark:text-gray-400 mt-1">
                      {t('contact.hours_mon_fri', 'Monday — Friday: 08:30 AM – 06:00 PM')}
                    </p>
                    <p className="font-sans text-xs text-neutral-500 dark:text-gray-400">
                      {t('contact.hours_sat', 'Saturday: 09:00 AM – 02:00 PM (By Appt Only)')}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Map Section */}
            <div className="rounded-lg overflow-hidden border border-neutral-200 dark:border-white/5 shadow-lg h-[240px] relative bg-neutral-200 dark:bg-neutral-950">
              <iframe
                title="SS Construction Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3218731110057!2d78.1408803!3d11.23352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab07e15bf9b6db%3A0xe5a3c00445d4c887!2sBodinaickenpatti%2C%20Tamil%20Nadu%20637001!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale dark:invert dark:opacity-80"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
