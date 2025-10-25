import React from 'react';
import { motion } from 'framer-motion';

const PartnerBar: React.FC = () => {
  // Alle Partner in einer Liste mit n8n in der Mitte (Index 2)
  const partners = [
    { name: 'fonio', logo: '/images/partner/fonio.svg', link: 'https://fonio.ai?ac=KQOOJKJ7H7' },
    { name: 'hubspot', logo: '/images/partner/hubspot.svg', link: 'https://www.hubspot.com/' },
    { name: 'n8n', logo: '/images/partner/n8n.svg', link: 'https://n8n.io/' },
    { name: 'instantly', logo: '/images/partner/instantly.svg', link: 'https://refer.instantly.ai/6al8blq7ki31' },
    { name: 'manychat', logo: '/images/partner/manychat.svg', link: 'https://manychat.partnerlinks.io/qiodmdgmxxvl' }
  ];

  return (
    <section className="pb-0 pt-0">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-400">
            Unsere Partner
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-16 md:gap-20 -ml-8 md:-ml-12"
        >
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center group"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className={`w-auto transition-all duration-300 opacity-80 group-hover:opacity-100 ${
                  partner.name === 'n8n' ? 'h-10' : 'h-8'
                }`}
                style={{
                  filter: partner.name === 'fonio' ? 'brightness(0) saturate(100%) invert(1) sepia(1) saturate(5) hue-rotate(250deg) brightness(1.2) contrast(1.1)' : 
                         partner.name === 'manychat' ? 'brightness(0) saturate(100%) invert(1)' : 'none'
                }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerBar;
