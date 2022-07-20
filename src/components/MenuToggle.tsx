import { motion } from "framer-motion";

// from Framer Motion's examples list
// @ts-ignore
const Path = props => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="#94a3b8"
      whileHover={{ stroke: '#64748b'}}
      strokeLinecap="round"
      {...props}
    />
  );

  // from Framer Motion's examples list
  // @ts-ignore
  export const MenuToggle = ({ toggle }) => (
    <motion.button className="menubtn" onClick={toggle} whileHover={{ y: -2 }}>
      <svg  width="23" height="23" viewBox="0 0 23 23">
        <Path
        
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </motion.button>
  );