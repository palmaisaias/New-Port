// Install the required packages before using this component:
// npm install react-icons emailjs-com

import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPaperPlane, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success');
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  // State to control the modal
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let timer;
    if (isAlertVisible) {
      timer = setTimeout(() => {
        setIsAlertVisible(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isAlertVisible]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_8g8l37s';
    const templateID = 'template_va7kegi';
    const publicKey = 'JPQxpxvPky1uNQ74r';

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        setAlertMessage('Message sent successfully!');
        setAlertType('success');
        setIsAlertVisible(true);
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
        setAlertMessage('Failed to send message. Please try again.');
        setAlertType('error');
        setIsAlertVisible(true);
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <section
        id="contact"
        className="py-16 bg-gradient-animated text-center font-sans relative animate-fadeIn"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 animate-slideInUp text-gray-800">
          Contact Me
        </h2>
        <div className="max-w-xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6 bg-white p-8 rounded-lg shadow-lg animate-scaleUp"
          >
            {/* Form fields */}
            <div className="flex items-center">
              <FaEnvelope className="text-blue-500 mr-3 text-2xl" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="flex-1 border p-3 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow duration-300"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-blue-500 mr-3 text-2xl" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="flex-1 border p-3 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow duration-300"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-start">
              <FaEnvelope className="text-blue-500 mr-3 text-2xl mt-1" />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="flex-1 border p-3 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow duration-300"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center justify-center bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors animate-pulseOnce ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <FaPaperPlane className="ml-2 animate-bounce" />
            </button>
          </form>

          {/* Link to open the modal */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
            className="text-blue-500 mt-4 inline-block hover:underline"
          >
            Hex Name
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-5 w-24 h-24 bg-green-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
        <div className="absolute bottom-10 right-5 w-24 h-24 bg-yellow-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
      </section>

      {/* Modal (popup) */}
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={() => setShowModal(false)}
        >
          <div
            // Added max-height and overflow for scrollability
            className="bg-white p-8 rounded shadow-lg max-w-sm w-full max-h-80 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mb-4 break-words">
              1lpyypaic4fx2rut6kdn1ngghehtkxpf4yn65ams14g1ql578hv43m7zdyyxur9z62e2cpadxlpt450lpdltph8v1u0j5338lw6fhw9dr5o97cxkp6vvf86i3sbnk0yqbx2wmuzhsedp1wz2doceo0v259ldh8vpjf8yfukqwti3fjp3uc9rcgnsb94mnsixglqztmu6qivd9ijj2qq1gvvtggkxj4bsh98ri7mqny1xxr2h0np4voj9fq2sjvf1tfgcwwwyta6irgkk3bv44pob6cw2sbsbywbct969b7mdfesqskfqb8v8rh2oyfxazvmatmy86o0e7a8mukz7x9p9ie3l5mqk1w7lzdw70ik68hv5l1ckrzvennev8mm2l82zi0s3wd31e5tx7dozgsdq3a8l4pa1adie7x0h3u54kffua6mlbaqs9fhylm9kjdeuyx4v7wbobxaqf83wq6izxkovk1kb3jrnj5wmuxtxnwz2sgdlhidfke8iafk277a9ouwm0nrplu0ay53dxhe3bdoe4vxsxmmjrz1cfvv1zted0x6gll1s2ttnokpek52gp62mqyrjt67w4hszwqaqnwf6q6f0qo02kju0r9rcw9u6hwv9k3wsbseb86rymem2s8y9dojrp4tx2vjmdmy3vdf3el34efhv34y2itz9m3jsb1e03o0ez49x3ktah5wbyracf4vxamsbud5cwjcyogvsbkcp9rchgxjy8ho0s6fxgicez41p103tl0cxrscrr9wmuajwc69l94g4of05h4zovyno5lvyy151aw029hftycecwrrn1grvuhgewt5s8rm5xtmno4v6vuhlplp1ua7mymfhz24gfqmv10bdvqn7zqv0f65pyu0gixdmxcbcjtr0w61plklbmixs9sg7m6s3blmrd1bfwxzacvgth206at794tkxw5p5ci9kkupgk716r6pr0avllsyy5bq95iemn2zhb2rsnjbcfwyw0kk41lmxk752ubnotzcszn12vkt1i6xl293ldb2cbo2r28uf92ej19almvdym1fvt73t9dyutyhrtuxklhgzkr0ipx8ttjhjx39f292dztbptarbpmqe5bzi7x41qwsxxy5ye886ut2uh6okyv0q6pxlu9qg6dlelqgf16o62xb00v8wtszotowuins3mwlp97tm0j7jrufxmlu9o5zd6bj8eajktror8h17k0tmobhr9ges3nzotelit96mo80nklsnmezfc6a1uw2cycrk6cfw33xxm2zd26ay9vexb0o1gm4f2yj0jgaau5nrx6hnecsu3yyo2lzyqnrdo3frnmtw60xr31b8qdixp4iyxewtrzpd53m3p32hymg2c5x8xrpwuhoz74vnqt6ijernjh1b3lwvsj0h78rgpymswgup9ro4emiadcioddlaxqdisloqs7k2l7xrd3a8ym6p6tpy32pij20gmz0nik6cnk3hlhrfhw7fv4vod1u8rrrpk6ahg7fsapdfhh6hys2l2f1wfc1bolu29lk2rxplp8h3rcafhltk95wyo1tckwmvir7daiuxfctwenzi1xm8ckv4nnlfdttz5h9jki1ev0i4r861l6d7sf3xfa3tjdg5rzpl9qzxqbdlg6p3h298zxdx33rpjhjuod577lt801s51ghc7zm4dj9qqmkihdux808wjsx2j2apiswjzbut7xd52ngo62b35u15rdml7zfxbzml556jw14uqhi3t6da4lbtk78mh2puz1237q6zopipotug0m5msln5j9evjs2qcb3hd6rh0i8rh3himd0hptzp3wge3evxu29fy57lbvkzudm6kcz0xl9e17whgiijyovuvsufzjovtmwbz9ra0timvzc3glg53fa7kigu3ydkc6s3lpnegnthsq1ys06g8xf7a90dsnxok7sx86f6fktjujhua6ym85rnzwj03z6u32nkxyvyqen4v2leb51cs6rlyc9yxisw9cfqro630rydhzfludptyfj4xbodfhywofqvdijg6u9zonl068brasstcnnujfjazygsr4jub69bpq5tthf3r1fgjdzq8k5av7ffcwub4rbrcs0wrq2ahm9ohn0iqkvggkn88sjrwt7sskzqpesk0mlexsilg2amieiofw57f8bq5q6kn6bwbf1ampzroj7b8dm0io5zlgglxqdnuo6iovrcdzdf5qaja1zt95u8zejpwdluk665aamydu69k51lvlhfz1mvvjlvdw1f8j2h5bzghduxbp4ncq1gum08xqpfkq8aaliioyxrrg0l5qh24dcxxkdh61hh7p4wzi919wlniphmze599s1svg255tl3kjxll2p4hchkc8un9r8kqwzfsvitvuu7vvtehf1sm0pzap0126fgw7jx7hdtm4wotx0xph1g6upvju0aahvx47o0ntch3ishtx82bhovng8lzhe80zurugmr7go6zn3h478hx2sa5yax8dlzmt9gdzysdteita2un1ztiwwu1cb57z3s3es5z05giqpts4ecg7vn34lrdek6276qikalbnnbe1y6roy6t5mdp6jzl8q0yqdesap6d69thi1ztvsw5fdky8bgfsjc7qdnr3w9oo37epuie6zu1fjlytcx5pgfrvralnuvpak9gz0nwqfx5bpo2ffo7uhcidviu4ayl6uzpzbw4apcjpp2zusgl377a2zv26qqd1vab0ezv8jun3zq8e8kg4ewbfsy2qkemj0y2xqiofqf36l8qlhaad31x9q7d6l95m9yas9wd1aqa7jph8a3qsvltyy1tvjwrrrzl35mvsojldgqhg6in5yxh2wfaj9dxks9y878n1izycqq9xxr34qtobpxxzmwzkd1wqf7g6q50uw6nrq2hrwxcxg1ehpxdc2a01hggteicy1gvteecr616tjtcsg7j7ru9a6ij14kyyc7qtql24d8bd0au19w3r58gg9drzst2addlo4p3qsmdjr8zlwv2jrro0lublji9nozzvuf4eq5y8in5kgodfh2cwpc693ni6t9n1n2l0oj7bvtzudfrzx4htok7qrddvh7ym6psb62bcyvcjcou90lmxwbmir2vsj2lawqaogect71d4ng2luv5ghj77ojoxx6x4sxa61jvezsouuhbw4edkvwcl1jqhxfk7b9myh7dmgftx19pkbiw007ii07urnx1t
            </p>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Alert Notification */}
      {isAlertVisible && (
        <div className="fixed top-4 right-4 z-50">
          <div
            className={`flex items-center p-4 rounded-lg shadow-lg transform transition-all duration-500 ${
              alertType === 'success'
                ? 'bg-green-100 border border-green-200'
                : 'bg-red-100 border border-red-200'
            }`}
          >
            <div className="mr-3">
              {alertType === 'success' ? (
                <FaCheckCircle className="text-green-600 text-2xl" />
              ) : (
                <FaTimesCircle className="text-red-600 text-2xl" />
              )}
            </div>
            <div
              className={`font-medium ${
                alertType === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {alertMessage}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-opacity-30">
              <div
                className={`h-full ${
                  alertType === 'success' ? 'bg-green-600' : 'bg-red-600'
                } animate-progress`}
              ></div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0;
          }
        }
        .animate-progress {
          animation: progress 3s linear forwards;
        }
      `}</style>
    </>
  );
}

export default Contact;