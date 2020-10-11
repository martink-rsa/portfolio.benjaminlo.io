import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { Container, Card } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import PullRequest from 'components/common/Icons/PullRequest';
import { Wrapper, Grid, Item, Content, Stats } from '../styles';

export const Contributions = () => {
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  const {
      github: {
        search: { edges }
      },
    } = useStaticQuery(graphql`
    {
      __typename
      github {
        search(query: "author:benji011  is:pr created:>2020-01-01", type: ISSUE, first: 8) {
          edges {
            node {
              ... on GitHub_PullRequest {
                id
                author {
                  login
                  url
                }
                closed
                merged
                title
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ul className="contributions-section">
    {edges.map(({ node }) => (
      <li key={node.id}>
        <a className={(theme === "light" ? "pr-title-light" : "pr-title-dark")} href={node.url} target="_blank">{node.title}</a>
      </li>
    ))}
    </ul>
  );
};