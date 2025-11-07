import React from 'react';
import { motion } from 'framer-motion';

const PartnerBar: React.FC = () => {
  // Alle Partner in einer Liste mit n8n in der Mitte (Index 2)
  const partners = [
    { name: 'fonio', logo: '/images/partner/fonio.svg', link: 'https://fonio.ai?ac=KQOOJKJ7H7' },
    { name: 'hubspot', logo: '/images/partner/hubspot.svg', link: 'https://www.hubspot.com/' },
    { name: 'n8n', logo: '/images/partner/n8n.svg', link: 'https://n8n.io/' },
    { name: 'instantly', logo: '/images/partner/instantly.svg', link: 'https://refer.instantly.ai/6al8blq7ki31' },
    { name: 'manychat', logo: '/images/partner/manychat.svg', link: 'https://manychat.partnerlinks.io/qiodmdgmxxvl' },
    { name: 'hetzner', logo: '/images/partner/hetzner.svg', link: 'https://hetzner.cloud/?ref=biFp6lkCbmT0' }
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
          <h3 className="text-lg font-semibold text-gray-900">
            Unsere Partner
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-12 md:gap-16"
        >
          {partners.map((partner, index) => {
            const isSponsored = /ref=|partnerlinks|refer\./.test(partner.link) || ['fonio','instantly','manychat','hetzner'].includes(partner.name);
            const logoHeightClass = partner.name === 'n8n' ? 'h-10' : partner.name === 'hetzner' ? 'h-9' : 'h-8';
            const pixelHeight = partner.name === 'n8n' ? 40 : partner.name === 'hetzner' ? 36 : 32;
            const ariaLabel = `Partner: ${partner.name} (öffnet in neuem Tab)`;
            const title = `Partner: ${partner.name} (öffnet in neuem Tab)`;

            return (
              <motion.a
                key={partner.name}
                href={partner.link}
                target="_blank"
                rel={isSponsored ? 'noopener noreferrer sponsored nofollow' : 'noopener noreferrer'}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center group"
                aria-label={ariaLabel}
                title={title}
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  className={`w-auto transition-all duration-300 opacity-80 group-hover:opacity-100 ${logoHeightClass}`}
                  loading="lazy"
                  decoding="async"
                  height={pixelHeight}
                />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerBar;
