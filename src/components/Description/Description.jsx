import { useSelector } from "react-redux";
import { DescriptionWrap, Span, Text } from "./Description.Styled";
import { selectProduct } from "../../store/products/selectors";

export const Description = () => {
  const { description } = useSelector(selectProduct);

  return (
    <>
      {description ? (
        <DescriptionWrap>
          <Text>{description}</Text>
        </DescriptionWrap>
      ) : (
        <DescriptionWrap>
          <Text>
            Although it&#39;s typically considered safe, excessive consumption
            can lead to side effects. Therefore, it&#39;s recommended to consult
            a healthcare professional before using moringa, especially if
            you&#39;re pregnant, nursing, or taking other medications. This
            balanced approach allows for the benefits of moringa while
            recognizing the importance of proper usage and caution.
          </Text>
          <Text>
            Medicinal Uses: Antioxidant Properties:{" "}
            <Span>
              Moringa is packed with antioxidants that help fight oxidative
              stress and inflammation in the body.
            </Span>
          </Text>
          <Text>
            Anti-Diabetic Effects:
            <Span>
              Some studies have shown that moringa leaves might lower blood
              sugar levels, making it a valuable supplement for managing
              diabetes.
            </Span>
          </Text>
          <Text>
            Heart Health:
            <Span>
              The plant has been linked to reduced cholesterol levels, which is
              vital for heart health.
            </Span>
          </Text>
          <Text>
            Anti-Cancer Properties:
            <Span>
              Certain compounds in moringa, such as niazimicin, have been found
              to suppress the growth of cancer cells in laboratory studies
            </Span>
          </Text>
          <Text>
            Immune Support:
            <Span>
              With its high vitamin C content, moringa can boost the immune
              system.
            </Span>
          </Text>
          <Text>
            Digestive Aid:
            <Span>
              Moringa can help in treating digestive disorders due to its
              anti-inflammatory properties.
            </Span>
          </Text>
        </DescriptionWrap>
      )}
    </>
  );
};
